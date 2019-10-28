import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books }) => {
  // checking for the duplication of books then create new array
  const newBookList = [
    ...new Map(books.map(newBook => [newBook.id, newBook])).values()
  ];

  const renderedList = newBookList.map(book => {
    return <BookItem key={book.id} book={book} />;
  });

  return <div>{renderedList}</div>;
};

export default BookList;

// const BookList = ({ books }) => {
//     const renderedList = books.map(book => {
//         book.filter((val, item, index, array) => {
//             return array.indexOf(item) === index
//         })

//       return <BookItem key={book.id} book={book} />;
//     });

//     return <div>{renderedList}</div>;
//   };
