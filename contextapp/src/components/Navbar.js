/** Contains an example of consuming context using the Context Consumer approach. */

import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {

    render() { 
        return (
        /** Instantiates Context Consumer */
        <ThemeContext.Consumer>{(context) => {
            /** Destructures data received from ThemeContext. */
            const { isLightTheme, light, dark } = context;
            /** Determines which theme is being used, then assignes it to the theme variable. */
            const theme = isLightTheme ? light : dark;
            /** Dynamically styles the Navbar. */
            return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </nav>
            )
        }}</ThemeContext.Consumer>
        );
    }
}
 
export default Navbar;