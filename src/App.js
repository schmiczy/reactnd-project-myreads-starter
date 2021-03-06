import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {debounce} from 'throttle-debounce';

import * as BooksAPI from './utility/BooksAPI';
import sortByTitle from './utility/sort-by-title.js';

import BookShelves from './pages/BookShelves.js';
import BookSearch from './pages/BookSearch.js';
import PageNotFound from './pages/PageNotFound.js';
import Everything from './pages/Everything.js';

import './App.css';

class BooksApp extends React.Component {
  options = [
    {
      value: 'move',
      disabled: true,
      text: 'Move to...'
    },
    {
      value: 'currentlyReading',
      text: 'Currently Reading'
    },
    {
      value: 'wantToRead',
      text: 'Want to Read'
    },
    {
      value: 'read',
      text: 'Read'
    },
    {
      value: 'none',
      text: 'None'
    }
  ];

  debouncedSearch = debounce(750, (query) => {
    BooksAPI.search(query)
      .then(result => {
        this.setState(prevState => ({
          searchResult: prevState.searchValue === ''
            ? []
            : result.error
              ? []
              : this.crossCheckResult(result, prevState.shelvedBooks)
        }));
      });
  });

  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      searchResult: [],
      shelvedBooks: []
    }

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(result => {
        const sortedBooks = result
          .slice()
          .sort(sortByTitle);
        this.setState({
          shelvedBooks: sortedBooks
        })
      });
  }

  handleSearchChange(value) {
    value === this.state.searchValue
      ? this.setState(prevState => ({
        searchResult: this.crossCheckResult(prevState.searchResult, prevState.shelvedBooks)
      }))
      : value === ''
        ? this.setState({
          searchResult: [],
        })
        : this.debouncedSearch(value);
    this.setState({
      searchValue: value
    });
  }

  handleSelectionChange(book, value) {
    BooksAPI.update({id: book.id}, value);
    this.setState(prevState => {
      const newBooks = value !== 'none'
        ? prevState.shelvedBooks
          .filter(shelvedBook => (shelvedBook.id !== book.id))
          .concat([Object.assign(book, {shelf: value})])
          .sort(sortByTitle)
        : prevState.shelvedBooks
          .filter(shelvedBook => (shelvedBook.id !== book.id));
      return ({
        ...prevState,
        shelvedBooks: newBooks
      });
    });
  }

  crossCheckResult(result, shelvedBooks) {
    const xCheckedBooks = result
      .map(book => {
        const {shelf, ...bookWoShelf} = book;
        const shelvedVersion = shelvedBooks
          .find(shelvedBook => shelvedBook.id === book.id);
        return shelvedVersion
          ? Object.assign({}, shelvedVersion)
          : book.shelf
            ? bookWoShelf
            : book;
      })
      .sort(sortByTitle);
    return xCheckedBooks;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <BookShelves
              shelves={this.options
                .filter(option => (option.value !== 'move' && option.value !== 'none'))
                .map(option => ({
                  shelfName: option.text,
                  books: this.state.shelvedBooks.filter(book => (book.shelf === option.value)),
                  menuOptions: this.options
                }))}
              onMenuChange={this.handleSelectionChange}
            />
          </Route>
          <Route exact path="/search">
            <BookSearch
              searchValue={this.state.searchValue}
              onSearchChange={this.handleSearchChange}
              searchResult={this.state.searchResult}
              menuOptions={this.options}
              onMenuChange={this.handleSelectionChange}
            />
          </Route>
          <Route path="*/everything*">
            <Everything />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
