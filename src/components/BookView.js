import React from 'react';
import PropTypes from 'prop-types';

const BookView = (props) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url("${props.coverImage}")`
        }}>
      </div>
      {/*<div className="book-shelf-changer">
        <select>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>*/}
    </div>
    <div className="book-title">{props.title}</div>
    <div className="book-authors">
      <ul>
        {props.authors.map(author => (
          <li>{author}</li>
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
