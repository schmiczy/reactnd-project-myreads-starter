import React from 'react';
import PropTypes from 'prop-types';

import BookInteraction from './BookInteraction.js';

const BookShelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelfName ? props.shelfName : ''}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map(book => (
          <li key={book.id}>
            <BookInteraction
              book={book}
              menuOptions={props.menuOptions}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  shelfName: PropTypes.string,
  books: PropTypes.array.isRequired,
  menuOptions: PropTypes.array
};

export default BookShelf;
