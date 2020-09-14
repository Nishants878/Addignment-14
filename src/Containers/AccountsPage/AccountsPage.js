import React from 'react';
import classes from './AccountsPage.module.css';
import Topbar from '../../Components/Topbar/Topbar';

class AccountsPage extends React.Component{


    render(){
        return(
          <div className={classes.MainContainer}>
              <Topbar/>
          </div>
        )
      }
}

export default AccountsPage;