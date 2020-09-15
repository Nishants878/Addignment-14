import React from 'react';
import classes from './Avatar.module.css';



class Avatar extends React.Component{



    render(){
        return(
            <div className={classes.MainContainer}>
             <div className={classes.InnerWrapper}>
                 <p className={classes.AvatarHeader}>Change Avatar</p>
                 <div className={classes.ImageWrapper}>
                     <img className={classes.AvatarImage} src="https://templatemo.com/templates/templatemo_524_product_admin/img/avatar.png" alt="Profile Pic"/>
                     <div className={classes.DeleteIconWrapper}>
                     <i className={["far", "fa-trash-alt tm-product-delete-icon", classes.Icons].join(' ')}></i> 
                     </div>
                 </div>
                <button className={classes.UploadButton}>
                    Upload New Photo
                </button>
                 
             </div>

            </div>
        )
    }
    
}
export default Avatar;