import React from 'react';

import { Link } from 'react-router-dom';

function Navbar(props){

 
    return(
        <nav className="navbar navbar-expand-sm fixed-top bg-dark">
        <div className="container my-2">
          <Link to="/" className="navbar-brand text-white font-weight-bold">
            
          GTutor
           </Link>
           <Link to="/blogs" className="ml-auto">
          <button className="btn btn-outline-info mr-1">
            Blogs
           </button>
           </Link>
           
          <button 
          className="navbar-toggler bg-warning" 
          data-toggle="collapse"
          data-target="#collapseNav"
          >
           <i className="fas fa-bars text-white"></i>
          </button>
          <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
           <div className="navbar-nav">
             <Link to="/" className="nav-item nav-link text-warning h6 mx-3">
               Home
             </Link>
             <Link to="/community" className="nav-item nav-link h6 mx-3 text-warning">
               Community
             </Link>
             <Link to="/login" className="nav-item nav-link text-warning h6 mx-3">
               Login
             </Link>
            </div>
           </div> 
        </div>
      </nav>
    );
}
export default Navbar;