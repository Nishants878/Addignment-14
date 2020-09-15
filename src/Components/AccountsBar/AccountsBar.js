import React from 'react';
import classes from './AccountsBar.module.css';




class AccountsBar extends React.Component{


    render(){
        return(
            <div className={classes.MainContainer}>
                <div className={classes.InnerWrapper}>
                    <h4>List of Accounts</h4>
                    <p className={classes.AccountsIndicator}><label for="AccountsDetails"></label>Accounts</p>
               <select className={classes.SelectBox} name="AccountsDetails" id="AccountsDetails">
               <option value="" disabled selected hidden>Select an Account</option>
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Merchant">Merchant</option>
                  <option value="Customer">Customer</option>
               </select>

                </div>
            </div>
        )
    }

}


export default AccountsBar;