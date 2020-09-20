import React from 'react';
import classes from './AccountsPage.module.css';
import AccountsInfo from '../../Components/AccountsInfo/AccountsInfo'




class AccountsPage extends React.Component{
      
      state={
        formData: {
          username: '',
          password: ''
      },
       
        accountsPageData: {},
        
        
        
      }
     
      newProfilePicSubmit = (e) =>{
        e.preventDefault();
          
        this.setState({
          isUploadClicked:true
        })


        this.setState({
          showUploadTab:false
        })
      }
      onProFileChange = (e) =>{
        this.setState({ 
          newProfile:URL.createObjectURL( e.target.files[0]) 
        }); 
      } 

      hideTheTablet = () =>{
        this.setState({
          showUploadTab:false
        })
      }
      
      hiddenTabController = () =>{
          this.setState({
            showUploadTab:true
          })
      }
       


      
    handleChangeInData = (e) => {
      let newUser = e.target.value;
      const DataMain =JSON.parse([localStorage.getItem("Data")]);
      const retrieveData = DataMain[0];
      console.log(retrieveData);
      const accountsData = retrieveData.accountsPage;
      console.log(accountsData)

      this.setState({ accountsPageData: { ...accountsData[newUser] } })
  }

    componentDidUpdate(){
      console.log("component updated");
      
    }

  componentDidMount(){
    
     
    console.log("mount")
       
              
    // const accountsData =JSON.parse([localStorage.getItem("Data")]);
    // console.log(accountsData)
   

    // const retrieveData = accountsData[0];
    // console.log(retrieveData);

    // const mainData = retrieveData.accountsPage;
    // console.log(mainData);

      

    // const editorData = mainData.Editor;
    // console.log(editorData);
    // const customerData = mainData.Customer;
    // console.log(customerData);
    // const merchantData = mainData.Merchant;
    // console.log(merchantData)
    // const adminData = mainData.Admin;
    // console.log(adminData);

            
       
    
    

   


      
     
  

      
    
       

    
        
      
    
    
    

    
    
      
  
    
    
  }


    render(){
        return(
          <div className={classes.MainContainer}>

<div className={classes.MainContainerAccountsBar}>
        <div className={classes.InnerWrapperAccountsBar}>
            <h4>List of Accounts</h4>
            <p className={classes.AccountsIndicator}>Accounts</p>
       <select onChange={this.handleChangeInData} className={classes.SelectBox}>
       <option value="Select">Select an Account</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Merchant">Merchant</option>
          <option value="Customer">Customer</option>
       </select>

        </div>
    </div>

              
             

              <AccountsInfo updatingData={this.state.accountsPageData}/>






              
          </div>
        )
      }
}

export default AccountsPage;