import React from 'react'
import { Link } from 'react-router-dom'

function Blogs() {
  return (
    <div className="jumbotrons justify-content-center pt-1 ml-5">
        <div className="row d-flex flex-row-right">
          <div className="col-12 col-md-6 d-flex flex-column">
          <Link to="/Cproject">
          <button className="btn btn-primary text-weight-light w-75">
           <h2> C Projects
             </h2>
          </button></Link><br />
          <Link to="/Cppproject">
          <button className="btn btn-secondary w-75">
          <h2>  Cpp Projects
            </h2>
          </button></Link><br />
          <button className="text-weight-light btn btn-primary w-75"> 
      <a className='h2' href="https://youtube.com/channel/UCQfYodWv6RaNkSl9wI_-C-g"style={{color:"black"}}>
        Video Section</a>
      </button><br />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column">
          <Link to="/Datastructure">
          <button className="btn btn-success w-75">
          <h2>DataStructure Projects
            </h2>
          </button></Link><br />
          <Link to="/javaproject">
          <button className="btn btn-info w-75">
          <h2> Java Projects
            </h2>
          </button></Link><br />
          
          </div>
        </div>
    </div>
  )
}

export default Blogs;
