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
                case "ADD_solution":
                    this.setState({
                        cs:[newObject,...this.state.communitySol]
                    })
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
                name: "P.Vivek",
                company: "GGC",
                designation: "Lecturer",
                email:"vivekladdu007@gmail.com",
                message: "Navigation between pages are to good",
              },
            {
                id: 2,
                name: "M.Kiran kumar",
                company: "GGC",
                designation: "Lecturer",
                email:"kirankpmsc@gmail.com",
                message: "Smooth interface with good content",
              },
              {
                id: 3,
                name: "CH.Keerthi",
                company: "GGC",
                designation: "Lecturer",
                email:"keerthi140m@gmail.com",
                message: "Excellent Content",
              },
        ],
        communityQue:[],
        communitySol:[],
        projects:[
       
            {
             id:2,
             title:"projects-2",
             imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
             excerpt:"This is my project about ......",
             body:"body-2",
          },
         {
             id:3,
             title:"projects-3",
             imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
             excerpt:"This is my project about ......",
             body:"body-3",
         },
        ],

    }
    async componentDidMount()
    {
        const [responseProject,responceC]=await Promise.all([axios.get("http://127.0.0.1:8000/api/addproject"),axios.get("http://127.0.0.1:8000/api/c")])
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