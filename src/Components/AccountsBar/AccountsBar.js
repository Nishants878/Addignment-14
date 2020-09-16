import React from 'react';
import classes from './AccountsBar.module.css';






const AccountsBar = (props) =>{

    console.log(props)
    return(

        <div className={classes.MainContainer}>
        <div className={classes.InnerWrapper}>
            <h4>List of Accounts</h4>
            <p className={classes.AccountsIndicator}>Accounts</p>
       <select className={classes.SelectBox} onChange={(e) => props.onChange(e.target.value)}>
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




// class AccountsBar extends React.Component{


//     state={
//         selectValue:"Select",
//     }
//     handleChange = (e) =>{
//         this.setState({
//             selectValue:e.target.value,
//         })
        
//     }


//     render(){
//         return(
//             <div className={classes.MainContainer}>
//                 <div className={classes.InnerWrapper}>
//                     <h4>List of Accounts</h4>
//                     <p className={classes.AccountsIndicator}>Accounts</p>
//                <select onChange={this.handleChange}  className={classes.SelectBox} value={this.state.selectValue}>
//                <option value="Select">Select an Account</option>
//                   <option value="Admin">Admin</option>
//                   <option value="Editor">Editor</option>
//                   <option value="Merchant">Merchant</option>
//                   <option value="Customer">Customer</option>
//                </select>

//                 </div>
//             </div>
//         )
//     }

// }


export default AccountsBar;