import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

/** Consumes contexts using the Context Consumer approach. */
// class Navbar extends Component {

//     render() { 
//         return (
//           /** Instantiates AuthContext Consumer. Note: authContext value name is arbitrary. */
//           <AuthContext.Consumer>
//             {authContext => (
//               /** Instantiates ThemeContext Consumer. Note: themeContext name is arbitrary. */
//               <ThemeContext.Consumer>
//                 {themeContext => {
//                   /** Destructures data and function consumed from AuthContext */
//                   const { isAuthenticated, toggleAuth } = authContext;
//                   /** Destructures data received from ThemeContext. */
//                   const { isLightTheme, light, dark } = themeContext;
//                   /** Determines which theme is being used, then assignes it to the theme variable. */
//                   const theme = isLightTheme ? light : dark;
//                   /** Dynamically styles the Navbar. */
//                   return (
//                     <nav style={{ background: theme.ui, color: theme.syntax }}>
//                       <h1>Context App</h1>
//                       <div onClick={toggleAuth}>
//                           { isAuthenticated ? 'Logged in' : 'Logged out' }
//                       </div>
//                       <ul>
//                         <li>Home</li>
//                         <li>About</li>
//                         <li>Contact</li>
//                       </ul>
//                     </nav>
//                   );
//                 }}
//               </ThemeContext.Consumer>
//             )}
//           </AuthContext.Consumer>
//         );
//     }
// }
 

/** Consumes contexts using the useContext React Hook. */
 const Navbar = () => {
    /** Consumes the AuthContext and ThemeContext for this Component, then destructures the returned Context data. */
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);

    /** Determines which theme is being used, then assignes it to the theme variable. */
    const theme = isLightTheme ? light : dark;

    /** Returns JSX for React to use as the Component template. */
    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <div onClick={toggleAuth}>
          { isAuthenticated ? "Logged in" : "Logged out" }
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
 }

export default Navbar;