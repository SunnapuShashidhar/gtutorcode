import axios from 'axios';
import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
import { Consumer } from '../context';

 class WriteaRecommendation extends Component {
     state={
         id:"",
         name:"",
         email:"",
         company:"",
         designation:"",
         RecommendationsMessage:"",
        submitMessage:"",
        submitMessageTextColor:"",
     };
     onChange=(event)=>{
         this.setState({
             [event.target.name]:event.target.value,
         });
     };
     
    // onSubmit=async(handler,event)=>{
        onSubmit=(handler,event)=>{
        event.preventDefault();

        const newRecomandation={
            id:uuid(),
            name:this.state.name,
            company:this.state.company,
            designation:this.state.designation,
            message:this.state.RecommendationsMessage,
        };
       // const responce=await axios.post("http://127.0.0.1:8000/api/recommendations/add",newRecomandation)
        //let isSuccessful=responce.data.isSuccessful;
        const isSuccessful=true;
        const {name}=this.state;
        if (isSuccessful){
            this.setState({
                submitMessage:`Thanks ${name} . I will contact you soon`,
                submitMessageTextColor:"text-info",
            });
           
        }
        else{
            this.setState({
                submitMessage:"Oops! somthing went wrong",
                submitMessageTextColor:"text-danger",
            });         
        }

       handler("ADD_RECOMANDATION",newRecomandation); 
     };
        
     
    render() {
       return(
           <Consumer>
               {(value)=>{
                    const { submitMessageTextColor, submitMessage } = this.state;
                    const {handler}=value;
                      return (
                        <div className="container my-5 py-5">
                          <  h1 className="font-weight-light text-center py-5">
                              <span className="text-info">Thanks you!</span> showing interest
                          </h1>
                          <div className="row justify-content-center">
                              <div className="col-11 col-lg-5">
                         <form onSubmit={this.onSubmit.bind(this,handler)}>
                        <div className="form-group">
                            <label htmlFor="name">Name*</label>
                            <input type="text"name="name"className="form-control"onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <input type="email"name="email"className="form-control"onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="company">Company/institution</label>
                            <input type="text"name="company"className="form-control"onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="designation">Designation</label>
                            <input type="text"name="designation"className="form-control"onChange={this.onChange}/>
                        </div>
                        <label htmlFor="RecommendationsMessage">Recommendation</label>
                        <textarea className="form-control" row="5"name="RecommendationsMessage"className="form-control"onChange={this.onChange}/>
                        <button type="submit"className="btn btn-danger float-right"style={{backgroundColor:"red"}}>
                        Let's of Love!
                        </button>
                        </form>
                              </div>
                         </div>  
                         <div className="py-5 mx-2 text-center">
                          <h5 className={submitMessageTextColor}>{submitMessage}</h5>   
                         </div>
                        </div>
                    )  
               }}
           </Consumer>
       )
                    
                 
                }
       
    
}
export default WriteaRecommendation;