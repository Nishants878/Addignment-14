import React from 'react';
import classes from './AccountsPage.module.css';

import AccountsBar from '../../Components/AccountsBar/AccountsBar';
import Avatar from '../../Components/Avatar/Avatar';
import AccountSettings from '../../Components/AccountsSettings/AccountSettings'

class AccountsPage extends React.Component{


    render(){
        return(
          <div className={classes.MainContainer}>
              
              <AccountsBar/>
              <div className={classes.LowerBoundFlexContainer}>
                 <Avatar/>
                <AccountSettings/>
              </div>
          </div>
        )
      }
}

export default AccountsPage;