import React from 'react';
import classes from './App.module.css';
import axios from 'axios';
import AccountsPage from './Containers/AccountsPage/AccountsPage'
import Topbar from './Components/Topbar/Topbar';
import Footer from './Components/Footer/Footer';
import { Route,  BrowserRouter, Switch } from 'react-router-dom';
import LoginPage from './Containers/LoginPage/LoginPage';
import DashboardPage from './Containers/DashboardPage/DashboardPage';
import AddProductPage from './Containers/AddProductPage/AddProductPage';
import ProductPage from './Containers/ProductPage/ProductPage';


class App extends React.Component{


 
  
componentDidMount(){


  axios.get("https://5ee2488a8b27f30016094871.mockapi.io/todos")

  .then(response =>{
    console.log(response.data);

     localStorage.setItem("Data", JSON.stringify(response.data));
     
     
    
})
.catch(err =>{
    console.log('Details Api Load Failed')
})
}

render(){
  return(
    <BrowserRouter>
    <div className={classes.MainContainer}>
      <Topbar/>
      
      <Switch>
      <Route exact path="/" component={LoginPage}/>
      <Route path="/dashboardpage" component={DashboardPage}/>
        <Route path="/accountspage" component={AccountsPage}/>
        <Route path="/productpage" component={ProductPage}/>
        <Route path="/addproductpage" component={AddProductPage}/>
        
        </Switch>
       
        <Footer/>
    </div>
    </BrowserRouter>
  )
}

}



export default App;
