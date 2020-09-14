import React from 'react';
import classes from './App.module.css';
import axios from 'axios';
import AccountsPage from './Containers/AccountsPage/AccountsPage'




class App extends React.Component{
  
componentDidMount(){
  axios.get("https://5ee2488a8b27f30016094871.mockapi.io/todos")

  .then(response =>{
    console.log(response.data);
    
})
.catch(err =>{
    console.log('Details Api Load Failed')
})
}

render(){
  return(
    <div className={classes.MainContainer}>
        <AccountsPage/>
    </div>
  )
}

}



export default App;
