import React from "react";
function Downlable() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6 d-flex flex-column">
          <a href="Ccs.pdf" download="Ccs.pdf">
            <button className="h-2 btn btn-success text-light w-100 text-weight-light my-2">
              <h2>
              C Notes
                </h2>
            </button>
            <br />

          </a>
          <a href="Ds.pdf" download="Ds.pdf">
            <button className="h-2 btn btn-primary text-light w-100 text-weight-light my-2">
               <h2>
               C++ notes
                </h2>
            </button>
            <br />

          </a>
        </div>
        <div className="col-md-6 d-flex flex-column">
        <a href="javanote.pdf" download="javanote.pdf">
            <button className="h-2 btn btn-success text-light w-100 text-weight-light my-2">
              <h2>
              Java notes
                </h2>
            </button>
            <br />

          </a>
          <a href="Ds.pdf" download="Ds.pdf">
            <button className="btn btn-primary text-light w-100 text-weight-light my-2">
              <h2>
              Data structure notes
              </h2>
             
            </button>
            <br />

          </a>
        </div>
      </div>
    </div>
  );
}

export default Downlable;
