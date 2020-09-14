import React from 'react';
import classes from './Topbar.module.css'

class Topbar extends React.Component{


    render(){
        return(
          <div className={classes.MainContainer}>
              <div className={classes.NavBar}>
                  <div className={classes.ProductDefinerWrapper}>
                         <h3 className={classes.ProductDetailName}>Product Admin</h3>
                  </div>

                  <div className={classes.PageNavigationWrapper}>
                    <div className={classes.IconAndLinkWrapper}>
                    <i className={["fas", "fa-tachometer-alt", classes.Icons].join(' ')}></i>  
                    <p className={classes.PageLinkName}>Dashboard</p>
                    </div>

                    <div className={classes.IconAndLinkWrapper}>
                    <i className={["fas", "fa-shopping-cart", classes.Icons].join(' ')}></i> 
                    <p className={classes.PageLinkName}>Products</p>
                    </div>

                    <div className={classes.IconAndLinkWrapper}>
                    <i className={["far", "fa-user", classes.Icons].join(' ')}></i> 
                    <p className={classes.PageLinkName}>Accounts</p>
                    </div>
                  </div>
                 
                  <div className={classes.LogoutWrapper}>
                         <h3 className={classes.AccountNameAndLogout}>Admin,<strong className={classes.LogoutName}>Logout</strong></h3>
                  </div>

              </div>
          </div>
        )
      }
}

export default Topbar;