
import React from 'react';
import classes from  './LatestHits.module.css';
import {Line} from 'react-chartjs-2';

class LatestHits extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                labels: [
                   "January",
                   "February",
                   "March",
                   "April",
                   "May",
                   "June",
                   "July"
                 ],
                 datasets: [
                   {
                     label: "Latest Hits",
                     data: [88, 68, 79, 57, 50, 55, 70],
                     fill: false,
                     borderColor: "rgb(75, 192, 192)",
                     cubicInterpolationMode: "monotone",
                     pointRadius: 0
                   },
                   {
                     label: "Popular Hits",
                     data: [33, 45, 37, 21, 55, 74, 69],
                     fill: false,
                     borderColor: "rgba(255,99,132,1)",
                     cubicInterpolationMode: "monotone",
                     pointRadius: 0
                   },
                   {
                     label: "Featured",
                     data: [44, 19, 38, 46, 85, 66, 79],
                     fill: false,
                     borderColor: "rgba(153, 102, 255, 1)",
                     cubicInterpolationMode: "monotone",
                     pointRadius: 0
                   }
                 ]
            }
        }
    }

        render(){
        return(
            <div className={classes.MainContainerLatestHits}>
                   <h3 className={classes.LatestHeader}>Latest Hits</h3>  
                   <div className={classes.HitsCharts}>
                    <Line
                     
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
                                ticks: {
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
                            }]
                          }
                    }}
                    data={this.state.data}
                    />
                </div>
            </div>
        )
        }
    

}
export default LatestHits;