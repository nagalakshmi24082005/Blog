// import React from 'react'

// const Header = () => {
//   return (
//     <div>
//       This is my Header
//     </div>
//   )
// }

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';  

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">My Blog</h1>
      <nav>
        <ul className="nav-links"> 
        <li><Link to="/home">Home</Link></li>
          <li><Link to="/createblogpage">CreateBlogPage</Link></li>
          <li><Link to="/myblogspage">MyBlogsPage</Link></li>
          <li><Link to="/contact">Contact</Link></li> 
          <li><Link to="/subscription">Subscription</Link></li> 
          <li><Link to="/profile">Profile</Link></li> 
          

        </ul>
      </nav>
    </header>
  );
};

export default Header;
