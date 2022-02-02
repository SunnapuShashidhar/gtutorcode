import React from 'react';
import {Link} from "react-router-dom";
import ReactMarkdown from 'react-markdown';

function BlogCard(props){
    const {id,title,excerpt,imageUrl,body}=props.blog;
   
        return (    
          <div className="card shadow h-100">
             <img src={imageUrl} alt={title} className="card-img-top"/>
             <div className="card-body">
                 <h4 className="card-title">{title}</h4>
               <p className="card-text">{excerpt}</p>
               <ReactMarkdown >{body}</ReactMarkdown>
             </div>  
          </div>         
        );
}

export default BlogCard;