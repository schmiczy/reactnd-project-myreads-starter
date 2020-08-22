import React from 'react';
import PropTypes from 'prop-types';

import BookInteraction from './BookInteraction.js';
import BookView from './BookView.js';

const BookShelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelfName ? props.shelfName : ''}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map(book => (
          <li key={book.id}>
            {props.menuOptions && props.onMenuChange
              ? <BookInteraction
                book={book}
                menuOptions={props.menuOptions}
                onMenuChange={props.onMenuChange}
              />
              : <BookView
                book={book}
              />
            }
          </li>
        ))}
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  shelfName: PropTypes.string,
  books: PropTypes.array.isRequired,
  menuOptions: PropTypes.array,
  onMenuChange: PropTypes.func
};

export default BookShelf;
