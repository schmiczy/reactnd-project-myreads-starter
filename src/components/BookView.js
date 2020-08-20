import React from 'react';
import PropTypes from 'prop-types';

const BookView = (props) => (
  <div className="book">
    <div className="book-cover">
      <img
        src={props.coverImage}
        alt={`Book cover of ${props.title}${props.authors.length > 0 ? ' from ' + props.authors[0] : ''}${props.authors.length > 1 ? ' and others' : ''}`}
      />
    </div>
    <div className="book-title">{props.title}</div>
    <div className="book-authors">
      <ul>
        {props.authors.map(author => (
          <li key={author}>{author}</li>
        ))}
      </ul>
    </div>
  </div>
);

BookView.propTypes = {
  coverImage: PropTypes.string,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default BookView;
