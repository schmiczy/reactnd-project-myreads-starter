import React from 'react';
import PropTypes from 'prop-types';

import BookView from './BookView.js';
import BookMenu from './BookMenu.js';
import missingCover from '../icons/no-cover-image.png';

class BookInteraction extends React.Component {
  defaultOptions = [
    {
      value: 'noValue',
      disabled: true,
      text: 'No actions available'
    }
  ]

  constructor(props) {
    super(props);
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
  }

  handleSelectionChange(event) {
    this.props.onMenuChange(this.props.book, event.target.value);
  }

  render() {
    const {imageLinks, title, authors, shelf} = this.props.book;
    return (
      <div className="book-interaction">
        <BookView
          coverImage={imageLinks ? imageLinks.thumbnail : missingCover}
          title={title}
          authors={authors ? authors : []}
        />
        <BookMenu
          onChange={this.handleSelectionChange}
          selectedValue={shelf ? shelf : ''}
          options={this.props.menuOptions
            ? this.props.menuOptions
            : this.defaultOptions
          }
        />
      </div>
    );
  }
}

BookInteraction.propTypes = {
  book: PropTypes.shape({
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string
    }),
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string)
  }),
  menuOptions: PropTypes.array
};

export default BookInteraction;
