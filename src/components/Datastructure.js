import React from "react";
import { Link } from "react-router-dom";
function Datastructure() {
  return (
    <div className="container justify-content-center pt-5">
      <div className="row d-flex flex-row">
        <div className="col-md-6 d-flex flex-column">
          <Link to="/typesofds">
            <button className="h-2 btn btn-primary text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Datastructure and it's types</h2>
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
          <Link to="/stringhandling">
            <button className="h-2 btn btn-info text-dark w-100 text-weight-light">
              <h2 style={{ color: "black" }}>Stack</h2>
            </button>
          </Link>
          <br />
          <Link to="/notations">
            <button className="h-2 btn btn-primary text-dark w-100 text-weight-light">
              <h3 style={{ color: "black" }}>
                Notations for Arithematic expressions
              </h3>
            </button>
          </Link>
          <br />
          <Link to="/infixtopostfix">
            <button className="h-2 btn btn-info text-dark w-100 text-weight-light">
              <h3 style={{ color: "black" }}>
                Converting Infix Expression to Postfix
              </h3>
            </button>
          </Link>
        </div>
        <div className="col-12 w-50 col-md-6 w-100 mx-auto mb-2">
        <Link to="/datastruc">
            <button className="h-2 btn btn-success text-light w-100 text-weight-light">
              <h2 style={{ color: "white" }}>Datastructure notes</h2>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Datastructure;
