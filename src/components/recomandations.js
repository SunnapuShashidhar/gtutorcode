import React from "react";
import RecomandCard from "./RecomandCard";
import {v4 as uuid} from "uuid";
import { Consumer } from "../context";

function Recomandations(props){
 return(
   <Consumer>
     {
       (value)=>{
         const {recommend}=value;
         return(

          <div className="container-fluid my-2">
               <div className="row text-center flex-nowrap d-flex overflow-auto scroolbar">
                { recommend.map((recommend)=>(
                   <div key={uuid()} className="col-12 col-md-4">
                     <RecomandCard recommend={recommend} style={{"height":"100%"}}/>
                 </div>
                 ))}
               </div>

         </div>
             );
       }
     }
   </Consumer>
 )
   
}

export default Recomandations;