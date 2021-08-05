import React from 'react';
import './Header.css';

const Header = (props) => {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" id="nav-title" href="/">Study Buddy</a>
    </nav>
   );
}
 
export default Header;