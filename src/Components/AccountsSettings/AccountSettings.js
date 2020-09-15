import React from 'react';
import classes from './AccountSettings.module.css';



class AccountSettings extends React.Component{



    render(){
        return(
            <div className={classes.MainContainer}>
            <div className={classes.InnerWrapper}>
                <p className={classes.AccountSettingsHeader}>
                   Accounts Settings
                </p>
                <form className={classes.FormWrapper}>
                     <div className={classes.FormLeftWrapper}>
                     <p className={classes.Label}>Account Name</p>
               <input className={classes.InputBox} type="name"/>

               <p className={classes.Label}>Password</p>
               <input className={classes.InputBox} type="password"/>

               <p className={classes.Label}>Phone</p>
               <input className={classes.InputBox} type="phone"/>
                     </div>

                     <div className={classes.FormRightWrapper}>

                     <p className={classes.Label}>Account Email</p>
               <input className={classes.InputBox} type="Email"/>

               <p className={classes.Label}>Re-enter Password</p>
               <input className={classes.InputBox} type="password"/>

               <button className={classes.UpdateButton}>
                    Update Your Profile
                </button>
                         
                         </div>
                </form>
                <button className={classes.DeleteWrapper}>
                    DELETE YOUR ACCOUNT
                </button>

            </div>

            </div>
        )
    }

}
export default AccountSettings;