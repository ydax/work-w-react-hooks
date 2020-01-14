import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

/** Consuming a context with the contextType approach in a Class Component. */

// class BookList extends Component {
//     /** Consumes Context data from ThemeContext. */
//     static contextType = ThemeContext;
    
//     render() {

//         /** Destructures data received from ThemeContext. */
//         const { isLightTheme, light, dark } = this.context;

//         /** Determines whether user has set light or dark theme. */
//         const theme = isLightTheme ? light : dark;

//         return (

//         /** Dynamically sets styles of the book list. */
//         <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
//             <ul>
//             <li style={{ background: theme.ui }}>The Way of Kings</li>
//             <li style={{ background: theme.ui }}>The Name of the Wind</li>
//             <li style={{ background: theme.ui }}>The Final Empire</li>
//             </ul>
//         </div>
//         );
//     }
// }


/** Consumes a context with the useContext approach in a UI Component. */
const BookList = () => {
    /** Brings in a context object with theme data and destructures it. */
    const { isLightTheme, light, dark } = useContext(ThemeContext);

    /** Brings in Book Context and destructures it. */
    const { books } = useContext(BookContext)
    
    /** Determines whether user has set light or dark theme. */
    const theme = isLightTheme ? light : dark;

    return (
      /** Dynamically sets styles of the book list. */
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
      {/** Dynamically outputs all books consumed from the BookContext state.
      * Note: book.title because title is a property on each book.
      */}
        <ul>
          {books.map(book => {
            return(
              <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>
              )})}
        </ul>
      </div>
    );
}

export default BookList;
