import React from 'react';
import {Link} from 'react-router-dom';

import BookShelf from '../components/BookShelf.js';

const books404 = [
  {
    title: '101 Great Gifts Kids Can Make',
    authors: ['Stephanie Mueller'],
    publisher: 'Gryphon House, Inc.',
    publishedDate: '2016-11-14',
    description: 'Children ages three to eight can make unique presents for moms, dads, grandparents, friends, teachers – all of the special people in their lives! Create a Made-It-Myself mouse pad personalized for Mom. Dad will love the peaceful chimes of his Terracotta Music Maker, and grandparents will be delighted with the Picture Puzzle. From the card to the wrapping paper, and everything in between, 101 Great Gifts Kids Can Make has dozens of perfect gift ideas that will make gift-giving meaningful again! - See more at: https://www.gryphonhouse.com/books/details/101_great_gifts_kids_can_make#sthash.4F5mNIkP.dpuf',
    industryIdentifiers: [
      {
        type: 'ISBN_13',
        identifier: '9780876594384'
      },
      {
        type:'ISBN_10',
        identifier: '0876594380'
      }
    ],
    readingModes: {
      text: true,
      image: true
    },
    pageCount: 160,
    printType: 'BOOK',
    categories: ['Education'],
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: false,
    contentVersion: '2.5.5.0.preview.3',
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false
    },
    imageLinks: {
      smallThumbnail: 'http://books.google.com/books/content?id=8UBLJz2NWAgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      thumbnail: 'http://books.google.com/books/content?id=8UBLJz2NWAgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
    },
    language: 'en',
    previewLink: 'http://books.google.com/books?id=8UBLJz2NWAgC&printsec=frontcover&dq=make&hl=&cd=11&source=gbs_api',
    infoLink: 'https://play.google.com/store/books/details?id=8UBLJz2NWAgC&source=gbs_api',
    canonicalVolumeLink: 'https://market.android.com/details?id=book-8UBLJz2NWAgC',
    id: '8UBLJz2NWAgC'
  },
  {
    title: '101 Key Terms in Philosophy and Their Importance for Theology',
    authors: [
      'Kelly James Clark',
      'Richard Lints',
      'James K. A. Smith'
    ],
    publisher: 'Westminster John Knox Press',
    publishedDate: '2004',
    description: 'Written by two philosophers and a theologian, this book provides easy access to key terms in philosophy and how they are understood and used in theology. The focused entries discuss what the terms have meant in classical and contemporary philosophy and then shift to what these philosophical understandings have meant in the history of Christian theology to the present day. The result is a unique volume that clearly shows the interplay of these disciplines and how theology has been influenced by the language and vocabulary of philosophy.',
    industryIdentifiers: [
      {
        type: 'ISBN_10',
        identifier: '0664225241'
      },
      {
        type: 'ISBN_13',
        identifier: '9780664225247'
      }
    ],
    readingModes: {
      text: false,
      image: true
    },
    pageCount: 116,
    printType: 'BOOK',
    categories: ['Religion'],
    averageRating: 5,
    ratingsCount: 1,
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: true,
    contentVersion: '0.1.0.0.preview.1',
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false
    },
    imageLinks: {
      smallThumbnail: 'http://books.google.com/books/content?id=H81iiiPtuGsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      thumbnail: 'http://books.google.com/books/content?id=H81iiiPtuGsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
    },
    language: 'en',
    previewLink: 'http://books.google.com/books?id=H81iiiPtuGsC&printsec=frontcover&dq=philosophy&hl=&cd=15&source=gbs_api',
    infoLink: 'https://play.google.com/store/books/details?id=H81iiiPtuGsC&source=gbs_api',
    canonicalVolumeLink: 'https://market.android.com/details?id=book-H81iiiPtuGsC',
    id: 'H81iiiPtuGsC'
  },
  {
    title: '101 Dance Games for Children',
    subtitle: 'Fun and Creativity with Movement',
    authors: [
      'Paul Rooyackers',
      'Cecilia Hurd'
    ],
    publisher: 'Hunter House',
    publishedDate: '1996-01',
    description: 'Encourages children to develop their imaginations, social skills, self-expression, and coordination with a collection of 101 dance games that emphasize creativity, no-blame activities, working with a group, and more.',
    industryIdentifiers: [
      {
        type: 'ISBN_10',
        identifier: '0897931718'
      },
      {
        type: 'ISBN_13',
        identifier: '9780897931717'
      }
    ],
    readingModes: {
      text: false,
      image: true
    },
    pageCount: 146,
    printType: 'BOOK',
    categories: ['Crafts & Hobbies'],
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: false,
    contentVersion: '0.0.1.0.preview.1',
    imageLinks: {
      smallThumbnail: 'http://books.google.com/books/content?id=SgKDllvWt9QC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      thumbnail: 'http://books.google.com/books/content?id=SgKDllvWt9QC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
    },
    language: 'en',
    previewLink: 'http://books.google.com/books?id=SgKDllvWt9QC&printsec=frontcover&dq=games&hl=&cd=11&source=gbs_api',
    infoLink: 'http://books.google.com/books?id=SgKDllvWt9QC&dq=games&hl=&source=gbs_api',
    canonicalVolumeLink: 'https://books.google.com/books/about/101_Dance_Games_for_Children.html?hl=&id=SgKDllvWt9QC',
    id: 'SgKDllvWt9QC'
  },
  {
    title: '101 More Dance Games for Children',
    subtitle: 'New Fun and Creativity with Movement',
    authors: ['Paul Rooyackers'],
    publisher: 'Hunter House',
    publishedDate: '2003',
    description: 'Filled with dance games that the whole classroom or family can play and learn from, this book collects noncompetitive activities that reward children for their involvement, encourage them to use their imagination, and show them how to express their feelings without using words. Illustrations.',
    industryIdentifiers: [
      {
        type: 'ISBN_10',
        identifier: '0897933834'
      },
      {
        type: 'ISBN_13',
        identifier: '9780897933834'
      }
    ],
    readingModes: {
      text: false,
      image: true
    },
    pageCount: 160,
    printType: 'BOOK',
    categories: ['Family & Relationships'],
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: false,
    contentVersion: '0.0.1.0.preview.1',
    imageLinks: {
      smallThumbnail: 'http://books.google.com/books/content?id=MXDYjW0U-hwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      thumbnail: 'http://books.google.com/books/content?id=MXDYjW0U-hwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
    },
    language: 'en',
    previewLink: 'http://books.google.com/books?id=MXDYjW0U-hwC&printsec=frontcover&dq=games&hl=&cd=17&source=gbs_api',
    infoLink: 'http://books.google.com/books?id=MXDYjW0U-hwC&dq=games&hl=&source=gbs_api',
    canonicalVolumeLink: 'https://books.google.com/books/about/101_More_Dance_Games_for_Children.html?hl=&id=MXDYjW0U-hwC',
    id: 'MXDYjW0U-hwC'
  }
];

const PageNotFound = (props) => (
  <div>
    <div className="page-error">
      <BookShelf
        shelfName="Page not found, also known as Error"
        books={books404}
      />
    </div>
    <div className="back-to-home">
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  </div>
);

export default PageNotFound;
