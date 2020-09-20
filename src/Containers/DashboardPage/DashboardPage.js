import React from 'react';
import classes from  './DashboardPage.module.css';
import LatestHits from '../../Components/LatestHits/LatestHits';
import Performance from '../../Components/Performance/Performance';
import Storage from '../../Components/Storage/Storage';
import Notification from '../../Components/Notification/Notification';
import OrderList from '../../Components/OrderList/OrderList';


class DashboardPage extends React.Component{
    
   

    render(){
        return(
            <div className={classes.DashboardMainContainer}>
                <p>Welcome back, <strong>Admin</strong></p>
                <div className={classes.FlexMegaWrapper}>
                    <div className={classes.HitAndPerformanceWrapperFlex}>
                        <LatestHits/> 
                        <Performance/>
                    </div>
                    <div className={classes.InfoAndNotifyWrapperFlex}>
                        <Storage/>
                        <Notification/>
                    </div>
                    <div className={classes.ListWrapperFlex}>
                    <OrderList/>
                    </div>
                </div>
               </div>
        )
    }
}
export default DashboardPage;