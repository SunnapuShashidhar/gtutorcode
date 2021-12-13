import React from 'react'
import {Link} from 'react-router-dom'

function Community(props) {
  return (
    <div className="container my-5 py-5 shadow">
    <div className="text-center text-align-center">
         <h1 className="font-wight-light">
           Wel come to our <span className="text-info">
           Community
           </span>
       </h1>
        <div className="lead">This community help you in solving of your doubts.</div>
       </div>
          <div className="row my-5 pt-3">          
                       <div className="col-md-4 col-12">
                        
                       </div>      
              
          </div> 
        
          
          <div className="my-5">
              <Link to="/ask-a-question" className="text-dark text-right" >
              <button className="btn btn-danger float-right float-bottom">
                Ask Question
                </button>
              </Link>
              
              </div>   
  </div>
)
}

export default Community
