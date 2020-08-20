import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import BookShelf from '../components/BookShelf.js';

class BookSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    const value = event.target.value;
    this.props.onSearchChange(value);
  }

  componentDidMount() {
    this.props.onSearchChange(this.props.searchValue);
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.props.searchValue}
              onChange={this.handleSearchChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookShelf
            shelfName="Search results"
            books={this.props.searchResult}
            menuOptions={this.props.menuOptions}
            onMenuChange={this.props.onMenuChange}
          />
        </div>
      </div>
    );
  }
}

BookSearch.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  searchResult: PropTypes.array.isRequired,
  onMenuChange: PropTypes.func.isRequired
};

export default BookSearch;
