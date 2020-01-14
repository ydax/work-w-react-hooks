/** Creates a Context used to store State data about a user's book list. */

import React, { createContext, useState } from 'react';

/** Enables Components to consume the created Context. */
export const BookContext = createContext();

/** Instantiates a UI Component that creates a Context. */
const BookContextProvider = (props) => {
    /** Instantiates State data, names it, and names the function used to modify it (via destructuring). */
    const [books, setBooks] = useState([
        {title: 'name of the wind', id: 1},
        {title: 'the way of kings', id: 2},
        {title: 'the final empire', id: 3},
        {title: 'the hero of ages', id: 4}
    ])
    return ( 
        <BookContext.Provider value={{ books }}>
            {/** Wraps any children Compnents with this Context Provider. */}
            {props.children}
        </BookContext.Provider>
     );
}

export default BookContextProvider;