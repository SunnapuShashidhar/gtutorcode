import React from "react";
import { Link } from "react-router-dom";
import Titleimg from "../assites/Titleimg.jpg";

function Title() {
  return (
    <div className="jumbotron text-center align-items-center m-2 shadow">
      <div className="row py-3">
        <div className="col-12 col-md-6 justify-content-center py-5">
          <h4 className="text-primary">
            Oh! great. We have only one step back to collaborate.let finish it
          </h4>
          <br />
          <span className="h1 pr-1 text-info"></span>

          <Link to="/register">
            <button
              type="submit"
              className="btn btn-outline-success rounded-pill h1"
              style={{ backgroundColor: "green", color: "white" }}
            >
              <h2>
                Register&nbsp;
                <i
                  className="fa fa-angle-double-right h-1"
                  aria-hidden="true"
                ></i>
              </h2>
            </button>
          </Link>
        </div>
        <div className="col-12 col-md-6">
          <img className="img-fluid w-75" src={Titleimg} alt="Gtutor" />
        </div>
      </div>
    </div>
  );
}
export default Title;
