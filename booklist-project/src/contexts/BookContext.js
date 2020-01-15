/** Imports the parent datasource for books from the reducer and instantiates methods for modifying it. Consumer Components will consume it using the useContext() method, destructuring what it needs to function in the left-hand side of the instantiation.  */

import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    /** Stores books and dispatch method in this Component's state. */
    const [books, dispatch] = useReducer(bookReducer, []);
    
    /** Returns Context Provider */
    return (
        /** Passes Context data and methods to consuming Components. */
        <BookContext.Provider value= {{ books, dispatch }}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;