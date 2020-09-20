import React from 'react';
import classes from  './OrderTab.module.css';




export default function OrderTab(props) {
    return(
 
        <div className={classes.OrderBarMegaWrapper}>

 <div className={classes.MainOrderContentWrapper}>
        <p className={classes.OrdersContentHeader}>
                 {props.data.orderNo}
                    </p>
        </div>

        <div className={classes.MainOrderContentWrapper}>
        <p className={classes.OrdersContentHeader}>
        {props.data.status}
                    </p>
        </div>

        <div className={classes.MainOrderContentWrapper}>
        <p className={classes.OrdersContentHeader}>
           {props.data.operators}
                    </p>
        </div>

        <div className={classes.MainOrderContentWrapper}>
        <p className={classes.OrdersContentHeader}>
        {props.data.location}
                    </p>
        </div>

        <div className={classes.MainOrderContentWrapper}>
        <p className={classes.OrdersContentHeader}>
        {props.data.distance}
                    </p>
        </div>

        <div className={classes.MainOrderContentWrapper}>
        <p className={classes.OrdersContentHeader}>
        {props.data.startDate}
                    </p>
        </div>

        <div className={classes.MainOrderContentWrapper}>
        <p className={classes.OrdersContentHeader}>
         {props.data.deliveryDate}
                    </p>
        </div>



        </div>
      




    )
}