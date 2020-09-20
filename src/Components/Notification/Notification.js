import React, {useEffect, useState}  from 'react';
import classes from  './Notification.module.css';
import NotificationTiles from '../../Components/NotificationTiles/NotificationTiles';


export default function Notification(props) {

    const intitialState = {
       
        notificationData: [],
      }
      const [state, setState] = useState({...intitialState});
      useEffect(() => {
        const DataMain =JSON.parse([localStorage.getItem("Data")]);
      const retrieveData = DataMain[0];
      console.log(retrieveData);
      const dashboardpageData = retrieveData.dasbhoardPage;
      console.log(dashboardpageData);
      const notificationData = dashboardpageData.notifications;

      

        setState({
            ...state,
           notificationData: [...notificationData],
          })
      }, [])
    return(
        <div className={classes.MainContainerNotification}>
               
               <h3 className={classes.NotificationHeader}>Notification List</h3>
               <div className={classes.NotificationScrollWrapper}>
                        {
                            state.notificationData.map(item =>{
                                return <NotificationTiles data={item}/>
                            })
                        }
                             

                    </div>
        </div>
    )

}


