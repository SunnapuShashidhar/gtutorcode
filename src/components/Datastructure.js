import React from 'react'
import {Link} from 'react-router-dom'
function Datastructure() {
  return (
    <div className="container justify-content-center mt-5 pt-5">
        <div className="row d-flex flex-row">
          <div className="col-md-6 d-flex flex-column">
        
            
          <button className="btn btn-info text-dark">
          <a className='stretched-link' href="https://cpprogrames.blogspot.com/2021/05/data-structure.html"style={{color:"black"}}>
            Data Structure and it's type</a>
          </button><br />
          
          <button className="btn btn-primary"> 
          <a className='stretched-link' href="https://cpprogrames.blogspot.com/2021/05/algorithm-pseudopods-flow-chat.html"style={{color:"black"}}>
            Algorithm</a>
          </button><br />
          
          <button className="btn btn-info"><a className='stretched-link' href="https://cpprogrames.blogspot.com/2021/05/single-dimensional-array.html"style={{color:"black"}}>
          Single Dim Array
          </a>
          </button><br />
          <button className="btn btn-primary">
           <a className='stretched-link' href="https://cpprogrames.blogspot.com/2021/05/two-dimensional-array.html"style={{color:"black"}}> Two dim Array </a>
          </button><br />
          </div>
          <div className="col-md-6 d-flex flex-column">
          <button className="btn btn-info"> 
          <a className='stretched-link' href="https://cpprogrames.blogspot.com/2021/05/multi-dimensional-array.html"style={{color:"black"}}>
            Multi-dim Array</a>
          </button><br />
          <button className="btn btn-primary"> 
          <a className='stretched-link' href="https://cpprogrames.blogspot.com/2021/05/stack.html"style={{color:"black"}}>
            Stack</a>
          </button><br />
          <button className="btn btn-info"> 
          <a className='stretched-link' href="https://cpprogrames.blogspot.com/2021/05/algorithm-pseudopods-flow-chat.html"style={{color:"black"}}>
            Notations for Arthamtic Expression</a>
          </button><br />
          <button className="btn btn-primary"> 
          <a className='stretched-link' href="https://cpprogrames.blogspot.com/2021/05/infix-to-postfix-converstion.html"style={{color:"black"}}>
          Converting Infix Expressionto Postfix</a>
          </button><br />
        
          
          </div>
        </div>
    </div>
  )
}

export default Datastructure;
