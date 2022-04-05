import React from "react";
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";
function Datastructure() {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1_XF6bLSAonXqmCadl8X6a6hP216qY_Tw/view?usp=drivesdk",
      "datastructure.pdf"
    );
  };
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
        <button
          className="btn btn-primary h3 text-dark font-weight-bold w-50 mx-auto my-2"
          onClick={saveFile}
        >
          Downloadable content
        </button>
      </div>
    </div>
  );
}

export default Datastructure;
