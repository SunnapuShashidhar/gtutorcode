import React,{Component} from 'react'
import { Consumer } from '../context'

class WishList extends Component {
  render(){
    <Consumer>
      return(
        {(value)=>{
 return (
  <div className="container-fluid">
    <h1 className="font-weight-light text-center">My<span className="text-info">Wish List</span></h1>
    
    
  </div>
)
        }

        }
      )
    </Consumer>
   
  }

}

export default WishList
