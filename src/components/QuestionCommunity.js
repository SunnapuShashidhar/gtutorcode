import React, { Component } from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Consumer } from '../context';
import {v4 as uuid} from 'uuid';

 class QuestionCommunity extends Component {
     state={
        id:"",
         question:"",
         questionDescription:"",
         submitMessage:"",
         submitMessageTextColor:"",
     };
     onChange=(event)=>{
         this.setState({
             [event.target.name]:event.target.value,
         })
     };
     onBodyChange=(value)=>{
         this.setState({
             questionDescription:value,
         })
     };
     onSubmit=(handler,event)=>{
         event.preventDefault();
               this.setState({
                submitMessage:"Your query redirected to the data adminstater",
                submitMessageTextColor:"text-info",
             });
            
        

         const newQuestion={
            id:uuid(),
            question:this.state.question,
            questionDescription:this.state.questionDescription,
        };
        handler("ADD_Question",newQuestion);
     }
    render() {
        return(
            <Consumer>
                {(value)=>{
                    const {id,questionDescription,submitMessageTextColor,submitMessage}=this.state;
                    const {handler}=value;
                     return (
                        <div className="container pt-5 mt-5">
                            <h1 className="font-weight-light text-center"><span className="text-info">Post</span> Your question</h1>
                                
                                    <form onSubmit={this.onSubmit.bind(this,handler)}>
                                    <div className="form-group">
                            <label htmlFor="name">Name*</label>
                            <input type="text"name="name"className="form-control"onChange={this.onChange} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <input type="email"name="email"className="form-control"onChange={this.onChange}required/>
                        </div>
                                        <div className="form-group">
                                            <label htmlFor="question">question*</label>
                                            <input 
                                            type="text"
                                            id="question"
                                            name="qestion"
                                            className="form-control"
                                            onChange={this.onChange}
                                            required />
                                        </div>
                                        <SimpleMDE
                      onChange={this.onquestionDescriptionChange}
                  
                    />
                                        <button type="submit" className="btn btn-dark btn-block text-center my-5"style={{backgroundColor:"black"}}>Post</button>
                                           <h1 className="text-center font-weight-light p-4">
                                               <div className={submitMessageTextColor}>{submitMessage}</div>
                                           </h1>
                                    </form>
                                </div>
                    )
                }}
            </Consumer>
        )
       
    }
}
export default QuestionCommunity;