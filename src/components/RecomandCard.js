import React from 'react'

 function RecomandCard(props) {
     const {name,email,company,message,designation}=props.recommend;
    return (
    
        <div className="card shadow h-100">
           <div className="card-body">
              <h4 className="card-title">{message}</h4>
              <p className="card-text text-secondary mb-0">{name}<br/>{email} <br/>{designation} in {company} </p>
            </div> 
        </div>
     
    )
}

export default RecomandCard;