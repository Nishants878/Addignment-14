import React from 'react';
import classes from  './Storage.module.css';
import {Pie} from 'react-chartjs-2';



class Storage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: {
                datasets: [
                  {
                    data: [18.24, 6.5, 9.15],
                    backgroundColor: ["#F7604D", "#4ED6B8", "#A8D582"],
                    label: "Storage",
                    
                  }
                ],
                labels: [
                  "Used Storage (18.240GB)",
                  "System Storage (6.500GB)",
                  "Available Storage (9.150GB)"
                ]
              }
        }
    }

render(){
    return(
        <div className={classes.MainContainerStorage}>
        <h3 className={classes.StorageHeader}>Storage Information</h3>  
        <div className={classes.StorageCharts}>
                    <Pie
                     
                    options={{
                        responsive:true,
                        

                        maintainAspectRatio: false,
                        layout: {
                          padding: {
                            left: 10,
                            right: 10,
                            top: 10,
                            bottom: 10
                          }
                        },
                        legend: {
                          position: "top",
                          labels: {
                            fontColor: "white",
                            fontSize: 12    
                        }
                        }
                    }}
                    data={this.state.data}
                    />
                </div>
        </div>
    )
}
}
export default Storage;