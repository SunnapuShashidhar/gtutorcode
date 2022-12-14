import React from 'react';
import {Link} from "react-router-dom";
import ReactMarkdown from "react-markdown"
function ProjectCard(props){
    const {id,title,excerpt,imageUrl,body}=props.project;
   
        return (    
          <div className="card shadow h-100">
             <img src={imageUrl} alt={title} className="card-img-top"/>
             <div className="card-body">
                 <h4 className="card-title">{title}</h4>
                 <p className="card-text">{excerpt}</p>
                 <ReactMarkdown>{body}</ReactMarkdown>
               <Link to={`/project/${id}`} className="stretched-link"></Link>
             </div>  
          </div>         
        );
}

export default ProjectCard;