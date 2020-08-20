import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import BookShelf from '../components/BookShelf.js';

const BookSearch = (props) => (
  // TODO: use bookshelf component to display results
  <div className="search-books">
    <div className="search-books-bar">
      <Link to="/" className="close-search">Close</Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={props.searchValue}
          onChange={props.handleSearchChange}
        />
      </div>
    </div>
    <div className="search-books-results">
      <BookShelf
        shelfName="Search results"
        books={props.searchResult}
        menuOptions={props.menuOptions}
        onMenuChange={props.onMenuChange}
      />
    </div>
  </div>
);

BookSearch.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  searchResult: PropTypes.array.isRequired,
  onMenuChange: PropTypes.func.isRequired
};

export default BookSearch;
