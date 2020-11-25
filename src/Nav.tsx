import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => (
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Efren Ulloa</a>
      <ul className="nav justify-content-end">
         <li className="nav-item">
            <Link to="/experience">Experience</Link>
         </li>
         <li className="nav-item">
         <Link to="/skills">Skills</Link>
         </li>
      </ul>
   </nav>
);
