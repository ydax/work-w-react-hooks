import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
//                       ^-- Destructures book received from props.
    /** Triggers the removeBook function. Available through destructuring BookContext. */
    const { dispatch } = useContext(BookContext);
    return ( 
        /** Click event deletes book from state. */
        <li onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>
            <div className="title">{ book.title }</div>
            <div className="author">{ book.author }</div>
        </li>
     );
}
 
export default BookDetails;