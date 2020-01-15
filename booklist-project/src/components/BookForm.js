import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    const { dispatch } = useContext(BookContext);

    /** Sets up title state. */
    const [ title, setTitle ] = useState('');

    /** Sets up author state. */
    const [ author, setAuthor ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        /** Access to title, author rec'd from state mirroring the user's input. */
        dispatch({
            type: 'ADD_BOOK',
            book: {
                title,
                author
            }});
        setTitle('');
        setAuthor('');
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Book title" value={ title } onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Author" value={ author } onChange={(e) => setAuthor(e.target.value)} required />
            <input type="submit" value="Add book"/>
        </form>
     );
}
 
export default NewBookForm;