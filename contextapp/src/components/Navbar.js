/** Contains an example of consuming context using the Context Consumer approach. */

import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {

    render() { 
        return (
          /** Instantiates AuthContext Consumer. Note: authContext value name is arbitrary. */
          <AuthContext.Consumer>
            {authContext => (
              /** Instantiates ThemeContext Consumer. Note: themeContext name is arbitrary. */
              <ThemeContext.Consumer>
                {themeContext => {
                  /** Destructures data and function consumed from AuthContext */
                  const { isAuthenticated, toggleAuth } = authContext;
                  /** Destructures data received from ThemeContext. */
                  const { isLightTheme, light, dark } = themeContext;
                  /** Determines which theme is being used, then assignes it to the theme variable. */
                  const theme = isLightTheme ? light : dark;
                  /** Dynamically styles the Navbar. */
                  return (
                    <nav style={{ background: theme.ui, color: theme.syntax }}>
                      <h1>Context App</h1>
                      <div onClick={toggleAuth}>
                          { isAuthenticated ? 'Logged in' : 'Logged out' }
                      </div>
                      <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                      </ul>
                    </nav>
                  );
                }}
              </ThemeContext.Consumer>
            )}
          </AuthContext.Consumer>
        );
    }
}
 
export default Navbar;