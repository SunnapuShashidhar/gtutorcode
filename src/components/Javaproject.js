import React from 'react'
import {Link} from "react-router-dom"
function Javaproject() {

  return (
    <div className="container justify-content-center pt-5">
      <div className="row d-flex flex-row">
        <div className="col-md-6 d-flex flex-column">
          <Link to="/constructurejava">
            <button className="h-2 btn btn-info text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Constructors</h2>
            </button>
          </Link>
          <br />

          <Link to="/paramtag">
            <button className="h-2 btn btn-primary text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Looping statements</h2>
            </button>
          </Link>
          <br />
          <Link to="/jvm">
            <button className="h-2 btn btn-info text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>JVM</h2>
            </button>
          </Link>
  
          <br />
          <Link to="/algorithm">
            <button className="h-2 btn btn-primary text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Algorithms </h2>
            </button>
          </Link>
          
          <br />
        </div>
         
        <div className="col-md-6 d-flex flex-column">
        <Link to="/operatoresjava">
            <button className="h-2 btn btn-primary text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Control statements</h2>
            </button>
          </Link>
          <br />
          <Link to="/multithread">
            <button className="h-2 btn btn-info text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Datatypes</h2>
            </button>
          </Link>
          
          <br />
          <Link to="/stringhandlingjava">
            <button className="h-2 btn btn-primary text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>String handling functions</h2>
            </button>
          </Link>
          <br />
          <Link to="/applet">
            <button className="h-2 btn btn-info text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Applets</h2>
            </button>
          </Link>
          <br />
        </div>
        <div className="col-12 w-50 col-md-6 w-100 mx-auto mb-2">
        <a href="Javanote.pdf">
            <button className="h-2 btn btn-success text-light w-100 text-weight-light">
              <h2 style={{ color: "white" }}>Java notes</h2>
            </button>
          </a>
        </div>
        
       
      </div>
      
    </div>
  )
}

export default Javaproject;
