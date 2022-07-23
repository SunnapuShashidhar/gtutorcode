import React from "react";
import { Link } from "react-router-dom";
function Cbutton(props) {
  const { lin, title } = props.lin;
  return (
    <>
      <Link to={lin}>
        <button className="h-2 btn btn-info text-dark w-100 text-weight-light my-2">
          <h2 style={{ color: "black" }}>{title}</h2>
        </button>
      </Link>
      <br />
    </>
  );
}

export default Cbutton;
