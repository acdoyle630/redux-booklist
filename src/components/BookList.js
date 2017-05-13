import React from 'react';
import Book from './Book';

const BookList = ({ books })=> (
  <ul>
  {books.map( ({_id, title, author}) =>
    <Book
      key={_id}
      title={title}
      author={author}
      />
    )}
  </ul>
);

export default BookList;