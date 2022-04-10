import React from 'react'
import {Link} from "react-router-dom"
function Cppproject() {
  
  return (
    <div className="container justify-content-center pt-5">
      <div className="row d-flex flex-row">
        <div className="col-md-6 d-flex flex-column">
          <Link to="/constructure">
            <button className="h-2 btn btn-info text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Constructor</h2>
            </button>
          </Link>
          <br />

          <Link to="/datatypes">
            <button className="h-2 btn btn-primary text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>datatypes</h2>
            </button>
          </Link>
          <br />
          <Link to="/difference">
            <button className="h-2 btn btn-info text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Differences b/w C and C++</h2>
            </button>
          </Link>
  
          <br />
          <Link to="/oops">
            <button className="h-2 btn btn-primary text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Oops </h2>
            </button>
          </Link>
          
          <br />
        </div>
         
        <div className="col-md-6 d-flex flex-column">
        <Link to="/operators">
            <button className="h-2 btn btn-primary text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Operators</h2>
            </button>
          </Link>
          <br />
          <Link to="/passbyvalue">
            <button className="h-2 btn btn-info text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Pass by value and Reference</h2>
            </button>
          </Link>
          
          <br />
          <Link to="/scope">
            <button className="h-2 btn btn-primary text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Scope resolution operator</h2>
            </button>
          </Link>
          <br />
          <Link to="/Typecasting">
            <button className="h-2 btn btn-info text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Type casting</h2>
            </button>
          </Link>
          <br />
        </div>
        <div className="col-12 w-50 col-md-6 w-100 mx-auto mb-2">
        <a href="Javanote.pdf">
            <button className="h-2 btn btn-success text-light w-100 text-weight-light">
              <h2 style={{ color: "white" }}>C++ notes</h2>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cppproject;
