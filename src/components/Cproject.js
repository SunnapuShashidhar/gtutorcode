import React from "react";
import { Link } from "react-router-dom";
function Cproject() {
  return (
    <div className="container justify-content-center pt-5">
      <div className="row d-flex flex-row">
        <div className="col-md-6 d-flex flex-column">
          <Link to="/historyofC">
            <button className="h-2 btn btn-info text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>History C</h2>
            </button>
          </Link>
          <br />

          <Link to="/algorithm">
            <button className="h-2 btn btn-primary text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Algorithm</h2>
            </button>
          </Link>
          <br />
          <Link to="/singledimarray">
            <button className="h-2 btn btn-info text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Single Dim Array</h2>
            </button>
          </Link>
  
          <br />
          <Link to="/singledimarray">
            <button className="h-2 btn btn-primary text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Two dim Array</h2>
            </button>
          </Link>
          
          <br />
        </div>
         
        <div className="col-md-6 d-flex flex-column">
        <Link to="/multdimarray">
            <button className="h-2 btn btn-primary text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Multi-dim Array</h2>
            </button>
          </Link>
          <br />
          <Link to="/stringhandlingjava">
            <button className="h-2 btn btn-info text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>String handling functions</h2>
            </button>
          </Link>
          
          <br />
          <Link to="/looping">
            <button className="h-2 btn btn-primary text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Looping</h2>
            </button>
          </Link>
          <br />
          <Link to="/controlstatements">
            <button className="h-2 btn btn-info text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Control statements</h2>
            </button>
          </Link>
          <br />
        </div>
        <div className="col-12 w-50 col-md-6 w-100 mx-auto mb-2">
        <Link to="/cnotes">
            <button className="h-2 btn btn-success text-light w-100 text-weight-light">
              <h2 style={{ color: "white" }}>C notes</h2>
            </button>
          </Link>
        </div>
        
       
      </div>
    </div>
  );
}

export default Cproject;
