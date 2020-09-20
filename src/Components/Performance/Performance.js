import React from 'react';
import classes from  './Performance.module.css';
import {HorizontalBar} from 'react-chartjs-2';




class Performance extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: {
                labels: ["Red", "Aqua", "Green", "Yellow", "Purple", "Orange", "Blue"],
                datasets: [
                  {
                    label: "# of Hits",
                    data: [33, 40, 28, 49, 58, 38, 44],
                    backgroundColor: [
                      "#F7604D",
                      "#4ED6B8",
                      "#A8D582",
                      "#D7D768",
                      "#9D66CC",
                      "#DB9C3F",
                      "#3889FC"
                    ],
                    borderWidth: 0
                  }
                ]
              },
        }
    }


render(){
    return(
        <div className={classes.MainContainerPerformance}>
             <h3 className={classes.PerformanceHeader}>Performance</h3> 
             <div className={classes.PerformCharts}>
             <HorizontalBar
                     
                     options={{
                         responsive:true,
                         legend: {
                          labels: {
                              fontColor: "white",
                              fontSize: 12    
                          }
                      },
                         scales: {
                            yAxes: [
                                {
                                  barPercentage: 0.2,
                                  ticks: {
                                    beginAtZero: true,
                                    fontColor: "white",
                                    fontSize: 11,
                                  },
                                  scaleLabel: {
                                    display: true,
                                    labelString: "Hits"
                                  }
                                }
                              ],
                              xAxes: [{
                                ticks: {
                                    fontColor: "white",
                                    fontSize: 11,
                                    
                                }
                            }],
                           }
                     }}
                     data={this.state.data}
                     />
             </div>
        </div>
    )
}
}
export default Performance;