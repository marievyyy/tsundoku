import React from "react";

const BookItem = ({ book }) => {
  return (
    <div className="container">
      <h1>{book.volumeInfo.title}</h1>
      <img
        src={
          book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.smallThumbnail
            : null
        }
        alt={book.volumeInfo.title}
      ></img>
    </div>
  );
};

export default BookItem;

//   const withThumbnail = (
//     <div className="container">
//       <h1>{book.volumeInfo.title}</h1>
//       <img
//         src={book.volumeInfo.imageLinks.smallThumbnail}
//         alt={book.volumeInfo.title}
//       ></img>
//     </div>
//   );

//   const withOutThumnail = (
//     <div className="container">
//       <h1>{book.volumeInfo.title}</h1>
//     </div>
//   );
