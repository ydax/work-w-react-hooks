import React, { createContext, Component } from 'react';

/** Stores createContext() method in a variable. */
export const ThemeContext = createContext();

/** Creates a context provider.
Naming convention is DescriptionContextProvider (e.g. AdminContextProvider).
*/
class ThemeContextProvider extends Component {
    /** Stores shared data in the state variable.
    In a more mature app, this might come from Firebase. */
    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark: { syntax: '#ddd', ui: '#333', bg: '#555'},
    }

    /** Creates a method that can be called to toggle the theme. */
    toggleTheme = () => {
        /** Switches the bool value for isLightTheme. */
        this.setState({ isLightTheme: !this.state.isLightTheme });
    }

    render() { 
        return (
            /** Builds a Context Provider tag by appending .Provider
            to the variable storing the createContext() method.
            {value} Defines what data and/or methods is provided to Components Consuming this Context.*/
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {/** Refers to the children that this Component wraps. */}
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;