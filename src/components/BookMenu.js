import React from 'react';
import PropTypes from 'prop-types';

const BookMenu = (props) => (
  <div className="book-menu">
    <select>
      {
        props.options.map(option => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.text}
          </option>
        ))
      }
    </select>
  </div>
);

BookMenu.propTypes = {
  otions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    test: PropTypes.string.isRequired
  }))
};

export default BookMenu;
