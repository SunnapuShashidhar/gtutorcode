import React,{Component} from 'react'
import axios from 'axios'
import { Consumer } from '../context';
import {v4 as uuid} from "uuid"

class Login extends Component {
    state={
        email:"",
        password:"",
        submitMessage:"",
        submitMessageTextColor:"",
    }
    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        });
    };
    
    onSubmit=async(handler,event)=>{
       event.preventDefault();

       const newLogin={
           id:uuid(),
           email:this.state.email,
           password:this.state.password,
       };
      // const responce=await axios.post("http://127.0.0.1:8000/login",newLogin)
       //let isSuccessful=responce.data.isSuccessful;
       let isSuccessful=true;
       
       if (isSuccessful){
           this.setState({
               submitMessage:`Thanks alot!. Your succeswsfully Login `,
               submitMessageTextColor:"text-info",
           });
          
       }
       else{
           this.setState({
               submitMessage:"Oops! somthing went wrong",
               submitMessageTextColor:"text-danger",
           });         
       }

      handler("ADD_LOGIN",newLogin); 
    };
  
    render(){
        return(
<Consumer>
           {
               (value)=>{
                const { submitMessageTextColor, submitMessage } = this.state;
                const {handler}=value;
                return (
                    <div className="container mt-5 pt-5">
                          <div className="form-signin bg-primary">
                          <div className="row justify-content-center">
                            <form onSubmit={this.onSubmit.bind(this,handler)}>
                              
                                <h1 className="font-weight-bold text-dark text-center">
                           Login
                           </h1>    
                           
                                <div className="form-floating text-light">
                                <label htmlFor="email">Email address</label>
                                    <input type="email"name="email" className="form-control"placeholder="name@example.com"onChange={this.onChange}required/>
                                   
                                </div>
                                <div className="form-floating text-light">
                                <label htmlFor="Password">Password</label>
                                    <input type="password"name="password"className="form-control"placeholder="Password"onChange={this.onChange}required/>
                                    
                                </div>
                    
                                <div className="checkbox mb-3 text-light">
                                    <label>Remember me
                                        <input className='text-warning' type="checkbox" value="remember-me"/> 
                                    </label>
                                </div>
                                <button className="w-100 btn btn-lg btn-light" type="submit"onClick="Thanks alot!. Your succeswsfully Login">Sign in</button>
                                <br />
                                    [or]
                                <br />
                                <a href="" className='text-dark mx-auto'>
                                    forgot password
                                </a>
                                <p className="mt-5 mb-3 text-dark">&copy; 2019-2022</p>
                            </form>
                            </div>
                        </div>
                        <div className="pt-5 mx-2 text-center">
                          <h5 className={submitMessageTextColor}>{submitMessage}</h5>   
                         </div>
                    </div>
                  )
               }
           }
       </Consumer>
        )
       
     
    }
 
}

export default Login
