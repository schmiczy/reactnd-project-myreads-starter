import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import BookShelf from '../components/BookShelf.js';

const BookShelves = (props) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      {props.shelves.map(shelf => (
        <div key={shelf.shelfName}>
          <BookShelf
            shelfName={shelf.shelfName}
            books={shelf.books}
            menuOptions={shelf.menuOptions}
            onMenuChange={props.onMenuChange}
          />
        </div>
      ))}
    </div>
    <div className="open-search">
      <Link to="/search">
        <button>Add a book</button>
      </Link>
    </div>
  </div>
);

BookShelves.propTypes = {
  shelves: PropTypes.array.isRequired,
  onMenuChange: PropTypes.func.isRequired
};

export default BookShelves;
