import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
//                       ^-- Destructures book received from props.
    /** Triggers the removeBook function. Available through destructuring BookContext. */
    const { removeBook } = useContext(BookContext);
    return ( 
        /** Click event deletes book from state. */
        <li onClick={() => removeBook(book.id)}>
            <div className="title">{ book.title }</div>
            <div className="author">{ book.author }</div>
        </li>
     );
}
 
export default BookDetails;