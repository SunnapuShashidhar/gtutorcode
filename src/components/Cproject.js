import React from "react";
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";
function Cproject() {
  const saveFile = () => {
    saveAs(
      "https://docs.google.com/document/d/16bY3J7SI8ixgJkPNHGiGm84g3LuPSRx2/edit?usp=drivesdk&ouid=116726111695977519271&rtpof=true&sd=true",
      "C.pdf"
    );
  };
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
          <Link to="/stringhandling">
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

export default Cproject;
