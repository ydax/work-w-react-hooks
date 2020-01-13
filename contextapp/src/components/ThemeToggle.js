/** Creates a button the user can click to change the theme from light to dark. */

import React, { Component } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        const { toggleTheme } = this.context;
        return (
            <button onClick={ toggleTheme }>Toggle Theme</button>
            );
        };
    };
 
export default ThemeToggle;