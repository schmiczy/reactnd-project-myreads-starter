/**
* Library-type sorting of book titles where leading articles are not taken into account
* @param    {Object}    bookA    The first book to compare
* @param    {Object}    bookB    The other book to compare
* @return   {int}                 -1 if bookA comes first in the alphabet, 1 if bookB does, and 0 if the titles are the same
**/
const sortByTitle = (bookA, bookB) => {
  const articlePattern = /(the |a |an )?([\w\W]+)/i;
  const titleA = bookA.title.match(articlePattern)[2];
  const titleB = bookB.title.match(articlePattern)[2];
  return titleA < titleB
    ? -1
    : titleA > titleB
      ? 1
      : 0;
}

export default sortByTitle;
