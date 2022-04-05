import React from 'react'
import {saveAs} from "file-saver"
import {Link} from "react-router-dom"
function Cppproject() {
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
        <button
          className="btn btn-primary h3 text-dark font-weight-bold w-50 mx-auto my-2"
          onClick={saveFile}
        >
          Downloadable content
        </button>
      </div>
    </div>
  )
}

export default Cppproject;
