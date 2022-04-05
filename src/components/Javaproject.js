import React from 'react'
import {saveAs} from "file-saver"
import {Link} from "react-router-dom"
function Javaproject() {
  const saveFile = () => {
    saveAs(
      "https://docs.google.com/document/d/1ei1RjMiA1FtBnlRJCC_-YucfKeI_Ht4t/edit?usp=drivesdk&ouid=116726111695977519271&rtpof=true&sd=true",
      "java.pdf"
    );
};
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
              <h2 style={{ color: "black" }}>String handling fnctions</h2>
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

export default Javaproject;
