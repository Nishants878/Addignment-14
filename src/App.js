import React from 'react';
import classes from './App.module.css';
import axios from 'axios';
import AccountsPage from './Containers/AccountsPage/AccountsPage'
import Topbar from './Components/Topbar/Topbar';
import Footer from './Components/Footer/Footer';




class App extends React.Component{
  
componentDidMount(){
  axios.get("https://5ee2488a8b27f30016094871.mockapi.io/todos")

  .then(response =>{
    console.log(response.data);

  //  localStorage.setItem("...response.data");
    
})
.catch(err =>{
    console.log('Details Api Load Failed')
})
}

render(){
  return(
    <div className={classes.MainContainer}>
      <Topbar/>
        <AccountsPage/>
        <Footer/>
    </div>
  )
}

}



export default App;
