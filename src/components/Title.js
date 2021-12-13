import React from 'react';
import {Link} from 'react-router-dom';


 function Title() {
    return (
        <div className="jumbotron text-center align-items-center m-2 shadow">
        <div className="row py-3 mt-5">
            <div className="col-12 col-md-6 justify-content-center py-5">
                <h4 className="text-dark">Oh! greate .we have only one step back to collaborate.let finish it</h4><h2 className="text-info"><Link to="/register">
                 <button type="submit"className="btn btn-danger"style={{backgroundColor:"red"}}>
                 Register
                        </button></Link>
                    </h2>
            </div>
            <div className="col-12 col-md-6">
              <img className="img-fluid w-75" src="https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg" alt="Gtutor"/>
            </div>
            
            
        </div>
    </div>
    )
}
export default Title;