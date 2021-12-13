import React,{ Component } from "react";
import axios from 'axios';


const context=React.createContext();

export class Provider extends Component {
    handler=(action,newObject)=>{
        switch (action) {
            case "ADD_PROJECTS":
                this.setState({
                    projects:[newObject,...this.state.projects]})
                break;
            case "ADD_REGISTER":
                this.setState({
                 register:[newObject,...this.state.register]
                })
                   break;
            case "ADD_RECOMANDATION":
                this.setState({
                    recommend:[newObject,...this.state.recommend]
                })
                break;
            case "ADD_Question":
                this.setState({
                    communityQue:[newObject,...this.state.communityQue]
                })
                break;
            case "ADD_LOGIN":
                this.setState({
                    login:[newObject,...this.state.login]
                })
                break;
                case "ADD_CS":
                    this.setState({
                        cs:[newObject,...this.state.cs]
                    })
                break;
            default:
                break;
        }
    }
    state={
        handler:this.handler,
        login:[],
        register:[],
        recommend:[
            {
                id: 1,
                name: "Random",
                company: "ABC company",
                designation: "CEO",
                message: "He is a good engineer ",
              },
              {
                id: 2,
                name: "Random guy 2",
                company: "ABC company",
                designation: "Director",
                message: "He is a lazy person",
              },
        ],
        communityQue:[],
        projects:[
            {
                id:2,
                title:"Oops Concept",
                imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
                except:"This is my project about ......",
                body:"body-2",
             },
        ],
        cs:[
            {
                id:3,
                title:"Oops Concept",
                imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
                except:"This is my project about ......",
                body:"body-2",
             },
        ],

    }
    async componentDidMount()
    {
        const [responseProject,responceC]=await Promise.all([axios.get("http://127.0.0.1:8000/api/cpp"),axios.get("http://127.0.0.1:8000/api/c")])
        const newState={};
        newState.projects=responseProject.data.results;
        newState.cs=responceC.data.results;
            
        this.setState(newState)
    }  
    render(){

        
    return (
        <context.Provider value={this.state}>
            {this.props.children}
        </context.Provider>
    )
}
}
  

export const  Consumer=context.Consumer;