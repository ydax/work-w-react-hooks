import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    /** Stores data about books in this Component's state. */
    const [books, setBooks] = useState([
      { title: "name of the wind", author: "patrick rothfuss", id: 1 },
      { title: "the final empire", author: "brandon sanderson", id: 2 }
    ]);
    /** Adds a new book to the state. */
    const addBook = (title, author) => {
        setBooks([...books, { title, author, id: uuid() }])
    }
    /** Removes a book from the state. */
    const removeBook = (id) => {
        /** Filters out the book with the matching id. */
        setBooks(books.filter(book => book.id !== id));
    }
    /** Returns Context Provider */
    return (
        /** Passes Context data and methods to consuming Components. */
        <BookContext.Provider value= {{ books, addBook, removeBook }}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;