import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assites/Logo.jpg"
function Navbar(props){

 
    return(
        <nav className="navbar navbar-expand-sm stick-top bg-dark">
        <div className="container d-flex flex-row">
          <span>
          <Link to="/" className="navbar-brand"> 
          <img className="rounded-circle w-25 float-left" src={Logo} alt="" />
           </Link>
          </span>
    
           <Link to="/blogs" className="ml-auto">
          <button className="btn btn-outline-primary mr-1">
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
             <Link to="/project/add" className="nav-item nav-link text-warning h6 mx-3">
               Add Projects
             </Link>
             <a href="https://www.onlinegdb.com/online_c_compiler" className="nav-item nav-link text-warning h6 mx-3">
               Compiler
             </a>
             <Link to="/request" className="nav-item nav-link text-warning h6 mx-3">
               request
             </Link>
            </div>
           </div> 
        </div>
      </nav>
    );
}
export default Navbar;