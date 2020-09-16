import React from 'react';
import classes from './AccountsPage.module.css';

import AccountsBar from '../../Components/AccountsBar/AccountsBar';



class AccountsPage extends React.Component{
      
      state={
       
        data: {},
        showUploadTab:false,
        newProfile: null,
        isUploadClicked:false
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
       

    componentDidUpdate(){
      console.log("component updated");
      

    }

  componentDidMount(){
    
     
    
       
              
    const accountsData =JSON.parse([localStorage.getItem("Data")]);
    console.log(accountsData)
   

    const retrieveData = accountsData[0];
    console.log(retrieveData);

    const mainData = retrieveData.accountsPage;
    console.log(mainData);

      

    const editorData = mainData.Editor;
    console.log(editorData);
    const customerData = mainData.Customer;
    console.log(customerData);
    const merchantData = mainData.Merchant;
    console.log(merchantData)
    const adminData = mainData.Admin;
    console.log(adminData);

            
       
    
    this.setState({
      data:editorData,
    })

    this.getValue =  (value) => {

        
         if(value === "Admin"){
           this.setState({
             data:adminData
           })
         }
         if(value === "Editor"){
           this.setState({
             data:editorData
           })
         }
         if(value === "Merchant"){
          this.setState({
            data:merchantData
          })
        }
        if(value === "Customer"){
          this.setState({
            data:customerData
          })
        }

        

      
     
      }


      
     
  

      
    
       

    
        
      
    
    
    

    
    
      
  
    
    
  }


    render(){
        return(
          <div className={classes.MainContainer}>
              
              <AccountsBar onChange={this.getValue}/>

              
              <div className={classes.LowerBoundFlexContainer}>
              <div className={classes.MainsContainer}>
             <div className={classes.InnersWrapper}>
                 <p className={classes.AvatarHeader}>Change Avatar</p>
                 <div className={classes.ImageWrapper}>
                     <img className={classes.AvatarImage} src={this.state.isUploadClicked ? this.state.newProfile:this.state.data.profilePic} alt="Profile Pic"/>
                     <div className={classes.DeleteIconWrapper}>
                     <i className={["far", "fa-trash-alt tm-product-delete-icon", classes.Icons].join(' ')}></i> 
                     </div>
                 </div>
                 
                <button onClick={this.hiddenTabController} className={classes.UploadButton}>
                    Upload New Photo
                    
                </button>

                <div className={[this.state.showUploadTab ? classes.HiddenUploadTab: classes.HiddenAlways ].join(' ')}>
                      <form className={classes.pictureUpload}>
                      <i onClick={this.hideTheTablet} className={["fas", "fa-times", classes.CrossIcons].join(' ')}></i> 
                      <label for="myfile">Select a file:</label>
                      <input type="file"onChange={this.onProFileChange} accept="image/*" multiple = "false" ></input>
                        <button onClick={this.newProfilePicSubmit}>Upload</button>
                      </form>
                </div>
                
             </div>

            </div>
                
                 {/* form part */}
            <div className={classes.MainContainerSetting}>
            <div className={classes.InnerWrapperSetting}>
                <p className={classes.AccountSettingsHeader}>
                   Accounts Settings
                </p>
                <form className={classes.FormWrapper}>
                     <div className={classes.FormLeftWrapper}>
                     <p className={classes.Label}>Account Name</p>
               <input className={classes.InputBox} type="name" value={this.state.data.name}/>

               <p className={classes.Label}>Password</p>
               <input className={classes.InputBox} type="password" value={this.state.data.password}/>

               <p className={classes.Label}>Phone</p>
               <input className={classes.InputBox} type="phone" value={this.state.data.phone}/>
                     </div>

                     <div className={classes.FormRightWrapper}>

                     <p className={classes.Label}>Account Email</p>
               <input className={classes.InputBox} type="Email" value={this.state.data.email}/>

               <p className={classes.Label}>Re-enter Password</p>
               <input className={classes.InputBox} type="password" value={this.state.data.password}/>

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
              </div>
          </div>
        )
      }
}

export default AccountsPage;