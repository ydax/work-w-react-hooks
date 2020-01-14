/** Consumes the BookContext, cycles through it, then outputs something using the data. */

import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const { books } = useContext(BookContext);
    /** Evaulates whether books.length is greater than zero, act based on result. */
    return books.length ? ( 
        <div className="book-list">
            <ul>
                { books.map(book => {
                    { /** Returns UI Component for each book in the Context.
                    * Note that I will have to destructure this book as an argument in the BookDetails Component.
                    */}
                    return ( <BookDetails book={book} key={book.id} /> );
                })}
            </ul>
        </div>
     ) : (
         <div className="empty">No books to read. Hello free time :)</div>
     )
}
 
export default BookList;