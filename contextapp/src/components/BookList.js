/** Contains an example of consuming context using the contextType approach. */

import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
    /** Consumes Context data from ThemeContext. */
    static contextType = ThemeContext;
    
    render() {

        /** Destructures data received from ThemeContext. */
        const { isLightTheme, light, dark } = this.context;

        /** Determines whether user has set light or dark theme. */
        const theme = isLightTheme ? light : dark;

        return (

        /** Dynamically sets styles of the book list. */
        <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
            <li style={{ background: theme.ui }}>The Way of Kings</li>
            <li style={{ background: theme.ui }}>The Name of the Wind</li>
            <li style={{ background: theme.ui }}>The Final Empire</li>
            </ul>
        </div>
        );
    }
    }

export default BookList;
