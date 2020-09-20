import React, {useEffect, useState}  from 'react';
import classes from  './OrderList.module.css';
import OrderTab from '../../Components/OrderTab/OrderTab';

export default function OrderList(props) {
    
    const intitialState = {
       
        orderData: [],
      }
      const [state, setState] = useState({...intitialState});
      useEffect(() => {
        const DataMain =JSON.parse([localStorage.getItem("Data")]);
      const retrieveData = DataMain[0];
      console.log(retrieveData);
      const dashboardpageData = retrieveData.dasbhoardPage;
      console.log(dashboardpageData);
      const orderDataData = dashboardpageData.orders;

      

        setState({
            ...state,
            orderData: [...orderDataData],
          })
      }, [])


    return(
        <div className={classes.MainContainerOrderList}>
               
               <h3 className={classes.OrderHeader}>Notification List</h3>
               <div className={classes.OrderScrollWrapper}>
                         
                   <div className={classes.EntryBarMegaWrapper}>

                       <div className={classes.EntryBarContentWrapper}>
                           <p className={classes.EntryBarContentHeader}>
                           ORDER NO.
                           </p>
                       </div>

                       <div className={classes.EntryBarContentWrapper}>
                           <p className={classes.EntryBarContentHeader}>
                           STATUS
                           </p>
                       </div>

                       <div className={classes.EntryBarContentWrapper}>
                           <p className={classes.EntryBarContentHeader}>
                           OPERATORS
                           </p>
                       </div>

                       <div className={classes.EntryBarContentWrapper}>
                           <p className={classes.EntryBarContentHeader}>
                           LOCATION
                           </p>
                       </div>

                       <div className={classes.EntryBarContentWrapper}>
                           <p className={classes.EntryBarContentHeader}>
                           DISTANCE
                           </p>
                       </div>

                       <div className={classes.EntryBarContentWrapper}>
                           <p className={classes.EntryBarContentHeader}>
                           START DATE
                           </p>
                       </div>

                       <div className={classes.EntryBarContentWrapper}>
                           <p className={classes.EntryBarContentHeader}>
                           EST DELIVERY DUE
                           </p>
                       </div>

                        </div>  

                        

                            {
                                state.orderData.map(item =>{
                                    return  <OrderTab data={item}/>
                                })
                            }
                                   
                              
                                   
                                   

                         

                       

                     

                    

                     

                      

                      
                    </div>
        </div>
    )
}
