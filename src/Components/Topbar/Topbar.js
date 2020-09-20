import React from 'react';
import classes from './Topbar.module.css'
import {Link} from 'react-router-dom';
class Topbar extends React.Component{


    render(){
        return(
          <div className={classes.MainContainer}>
              <div className={classes.NavBar}>
                  <div className={classes.ProductDefinerWrapper}>
                         <h3 className={classes.ProductDetailName}>Product Admin</h3>
                  </div>

                  <div className={classes.PageNavigationWrapper}>
                    <Link className={classes.IconAndLinkWrapper} to="/dashboardpage">
                    <i className={["fas", "fa-tachometer-alt", classes.Icons].join(' ')}></i>  
                    <p className={classes.PageLinkName}>Dashboard</p>
                    </Link>

                    <Link className={classes.IconAndLinkWrapper} to="/productpage">
                    <i className={["fas", "fa-shopping-cart", classes.Icons].join(' ')}></i> 
                    <p className={classes.PageLinkName}>Products</p>
                    </Link>

                    <Link className={classes.IconAndLinkWrapper} to="/accountspage">
                    <i className={["far", "fa-user", classes.Icons].join(' ')}></i> 
                    <p className={classes.PageLinkName}>Accounts</p>
                    </Link>
                  </div>
                 
                  <Link className={classes.LogoutWrapper} to="/">
                         <h3 className={classes.AccountNameAndLogout}>Admin,<strong className={classes.LogoutName}>Logout</strong></h3>
                  </Link>

              </div>
          </div>
        )
      }
}

export default Topbar;