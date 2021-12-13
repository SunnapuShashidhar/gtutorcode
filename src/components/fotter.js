import React from "react";
import {Link} from "react-router-dom";

function Fotter(){
    return(
        <div>
          <div className="container-fluid bg-dark text-center text-align-center pt-5 mt-s">
        
        <p className="text-light h2">Intrested in working with me?</p>
        <Link to="/contact">
        <button id="let" className="btn btn-outline-light text-light">let's talk</button>
        </Link>
            
   <div className="row text-light py-3">
       <div className="col-12 col-md-4">
       <h5 className="text-info">More Links</h5>
       <Link to="/" className="text-light d-block">Blog</Link>
       <Link to="/" className="text-light d-block">home</Link>
       <Link to="/contact" className="text-light d-block">Contact Me</Link>
       <Link to="/write-a-recomandation" className="text-light d-block">Write a recommendation<i className="fas fa-heart"></i></Link>
       </div>
       
       <div className="col-12 col-md-4 text-justify py-3">
         <p>
            We are team of students from Governament Girraj college Nizamabad.This is our project named "Tutor(a Learning hub )". The aim the project is maintaing smart notes hub. in existiong onlion tutors they provide only one concept which are general but our smart notes hub provides all concepts related to our acadamic of our college and general concept.   
         </p>
       </div>
       <div className="col-12 col-md-4">
           <h5 className="text-info">Social</h5>
           <Link to="/">
               <i className="fab fa-linkedin text-light h1 d-block"></i>
           </Link>
           <Link to="/">
             <i className="fab fa-github text-light h1 d-block"></i>
         </Link>
         <Link to="/">
          <i className="fa fa-envelope text-light h1 d-block"></i>
         </Link>
         </div>

       </div>
   </div>
   <div className="bg-dark py-3 text-muted text-center">
          <p>copyright@ Shashidhar Sunnapu 2021</p> 
   </div>

</div>
    
    );
}
export default Fotter;