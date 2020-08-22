import React from 'react';
import PropTypes from 'prop-types';

import missingCover from '../icons/no-cover-image.png';

const BookView = (props) => {
  const {imageLinks, title} = props.book;
  const authors = props.book.authors ? props.book.authors : [];
  return (
    <div className="book">
      <div className="book-cover">
        <img
          src={imageLinks.thumbnail ? imageLinks.thumbnail : missingCover}
          alt={`Book cover of ${title}${authors.length > 0 ? ' from ' + authors[0] : ''}${authors.length > 1 ? ' and others' : ''}`}
        />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        <ul>
          {authors.map(author => (
            <li key={author}>{author}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

BookView.propTypes = {
  book: PropTypes.shape({
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string
    }),
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string)
  })
};

export default BookView;
