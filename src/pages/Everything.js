import React from 'react';
import {Link} from 'react-router-dom';

import BookShelf from '../components/BookShelf.js';

const everything = [
  {
    title: 'Everything In Its Path',
    authors: ['Kai T. Erikson'],
    publisher: 'Simon and Schuster',
    publishedDate: '2012-04-10',
    description: 'The 1977 Sorokin Award–winning story of Buffalo Creek in the aftermath of a devastating flood. On February 26, 1972, 132-million gallons of debris-filled muddy water burst through a makeshift mining-company dam and roared through Buffalo Creek, a narrow mountain hollow in West Virginia. Following the flood, survivors from a previously tightly knit community were crowded into trailer homes with no concern for former neighborhoods. The result was a collective trauma that lasted longer than the individual traumas caused by the original disaster. Making extensive use of the words of the people themselves, Erikson details the conflicting tensions of mountain life in general—the tensions between individualism and dependency, self-assertion and resignation, self-centeredness and group orientation—and examines the loss of connection, disorientation, declining morality, rise in crime, rise in out-migration, etc., that resulted from the sudden loss of neighborhood.',
    industryIdentifiers: [
      {
        type: 'ISBN_13',
        identifier: '9781439127315'
      },
      {
        type: 'ISBN_10',
        identifier: '143912731X'
      }
    ],
    readingModes: {
      text: true,
      image: false
    },
    pageCount: 288,
    printType: 'BOOK',
    categories: ['Nature'],
    averageRating: 3.5,
    ratingsCount: 2,
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: true,
    contentVersion: '0.5.3.0.preview.2',
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false
    },
    imageLinks: {
      smallThumbnail: 'http://books.google.com/books/content?id=vgmshXrXWH8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      thumbnail: 'http://books.google.com/books/content?id=vgmshXrXWH8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
    },
    language: 'en',
    previewLink: 'http://books.google.com/books?id=vgmshXrXWH8C&printsec=frontcover&dq=everything&hl=&cd=4&source=gbs_api',
    infoLink: 'https://play.google.com/store/books/details?id=vgmshXrXWH8C&source=gbs_api',
    canonicalVolumeLink: 'https://market.android.com/details?id=book-vgmshXrXWH8C',
    id: 'vgmshXrXWH8C'
  }
];

const Everything = (props) => (
  <div>
    <div className="page-error">
      <BookShelf
        shelfName="This page has"
        books={everything}
      />
    </div>
    <div className="back-to-home">
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  </div>
);

export default Everything;
