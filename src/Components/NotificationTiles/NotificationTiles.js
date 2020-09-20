import React from 'react';
import classes from  './NotificationTiles.module.css';


export default function NotificationTiles(props) {
      return(



        <div className={classes.IndividualBar}>

        <div className={classes.ImageWrapperBar}>

          <img src={props.data.pic}className={classes.ProfileImage} alt="Profile"/>

        </div>

        <div className={classes.MediaBodyWrapper}>

            <p className={classes.NotifyParaWrapper}>

           {props.data.message}
            </p>

      <span className={classes.TimeSpan}>{props.data.time}</span>

        </div>
    </div>




      )
}
