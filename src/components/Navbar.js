import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assites/Logo.jpg"
function Navbar(props){
    return(
        <nav className="navbar navbar-expand-sm stick-top bg-dark">
        <div className="container">
          <div>
          <Link to="/"> 
          <img className="rounded-circle"height="100"width="100" src={Logo} alt="GGlogo"title='GG Logo' />
           </Link>  
          </div>
          <h1 className='text-warning font-light'>
           Gtutor
           </h1>
          <Link to="/blogs" className="ml-auto">
          <button className="btn btn-outline-info">
            Blogs
           </button>
           </Link>
          <button 
          className="navbar-toggler " 
          data-toggle="collapse"
          data-target="#collapseNav"
          title='click on me'
          >
           <i className="fas fa-bar text-warning info-primary"></i>
          </button>
          <div className="collapse navbar-collapse flex-grow-0" id="collapseNav" style={{alignItems:"right"}}>
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
          
            </div>
           </div> 
        </div>
      </nav>
    );
}
export default Navbar;