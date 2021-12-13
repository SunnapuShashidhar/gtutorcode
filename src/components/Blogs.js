import React from 'react'
import { Link } from 'react-router-dom'

function Blogs() {
  return (
    <div className="jumbotrons justify-content-center mt-5 pt-5 ml-5">
        <div className="row d-flex flex-row-right">
          <div className="col-12 col-md-6 d-flex flex-column">
          <Link to="/Cproject">
          <button className="btn btn-primary w-75">
            C Projects
          </button></Link><br />
          <Link to="/Datastructure">
          <button className="btn btn-secondary w-75">
            Cpp Projects
          </button></Link><br />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column">
          <Link to="/Datastructure">
          <button className="btn btn-success w-75">
            DataStructure Projects
          </button></Link><br />
          <Link to="/Cprojects">
          <button className="btn btn-info w-75">
            Java Projects
          </button></Link><br />
          </div>
        </div>
    </div>
  )
}

export default Blogs;
