import React from 'react';
import axios from "axios"
import CardData from "./components /CardData"




class App extends React.Component{
  constructor(){
    super();
    this.state = {
      users: [],
      user: 'AnthonyLopez1120'    
    }
  }

  gitHubPull = user => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(res =>{
      this.setState({
        users: [...this.state.users, res.data]
      })
    })
    .catch(err =>{
      console.log("fetching user Error!!!!", err)
    })

    axios.get(`https://api.github.com/users/${user}/followers`)
    .then(res=>{
      res.data.forEach(element => {
        axios.get(element.url)
        .then(res=>{
          this.setState({users: [...this.state.users, res.data]})
        })
        .catch(err=>{
          console.log("follower pull error", err)
        })
   
      });
    })
  }

  componentDidMount(){
    console.log("App cDM")
    this.gitHubPull(this.state.user)
  }


  render(){
  return (
   <>
   <h1>{this.state.user}</h1>
   <CardData users = {this.state.users}/>
   </>
  );
  }
}

export default App;
