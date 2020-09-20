import React from 'react';
import classes from './AccountsInfo.module.css';






class AccountsInfo extends React.Component{

   state={
    isUploadClicked:false,
    newProfile: "",
    showUploadTab:false,
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

    render(){
    return(

        <div className={classes.LowerBoundFlexContainer}>
              <div className={classes.MainsContainer}>
             <div className={classes.InnersWrapper}>
                 <p className={classes.AvatarHeader}>Change Avatar</p>
                 <div className={classes.ImageWrapper}>
                     <img className={classes.AvatarImage} src={this.state.isUploadClicked ? this.state.newProfile:this.props.updatingData.profilePic} alt="profile" />
                     <div className={classes.DeleteIconWrapper}>
                     <i className={["far", "fa-trash-alt tm-product-delete-icon", classes.Icons].join(' ')}></i> 
                     </div>
                 </div>
                 
                <button onClick={this.hiddenTabController}  className={classes.UploadButton}>
                    Upload New Photo
                    
                </button>

                <div className={[this.state.showUploadTab ? classes.HiddenUploadTab: classes.HiddenAlways ].join(' ')}>
                      <form className={classes.pictureUpload} autoComplete="off">
                      <i onClick={this.hideTheTablet} className={["fas", "fa-times", classes.CrossIcons].join(' ')}></i> 
                      <label htmlFor="myfile">Select a file:</label>
                      <input type="file"onChange={this.onProFileChange} accept="image/*"></input>
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
                <form className={classes.FormWrapper} autoComplete="off">
                     <div className={classes.FormLeftWrapper}>
                     <p className={classes.Label}>Account Name</p>
               <input className={classes.InputBox} type="name" value={this.props.updatingData.name} />

               <p className={classes.Label}>Password</p>
               <input className={classes.InputBox} type="password" value={this.props.updatingData.password}  />

               <p className={classes.Label}>Phone</p>
               <input className={classes.InputBox} type="phone" />
                     </div>

                     <div className={classes.FormRightWrapper}>

                     <p className={classes.Label}>Account Email</p>
               <input className={classes.InputBox} type="Email"  value={this.props.updatingData.email}  />

               <p className={classes.Label}>Re-enter Password</p>
               <input className={classes.InputBox} type="password" value={this.props.updatingData.password}  />

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

    )
    }

}


export default AccountsInfo;