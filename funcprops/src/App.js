import React from 'react';
import './App.css';
// import {BrowserRouter as Shashi} from 'react-router-dom';
// import Route from 'react-router-dom/Route';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      user:''
      //users:[]
    }
  }



onHandleChange=(e)=>{
//let users=this.state.users
let user = this.state.user
 user = e.target.value
  console.log(user)
  //users.push(user)
  this.setState({
    user
  })
}






render(){
  //let users=this.state.users
  let user=this.state.user
  return(
    <div className="App">

      <input type='text' onChange={this.onHandleChange}/>
    
      <br/>  
      <h1>Hello {user}</h1>

    
    
    </div>
  )
}



}
export default App;
