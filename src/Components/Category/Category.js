import React from "react";
import classes from './Category.module.css';


export default function ProductPage(props) {

  
   
      console.log(props)
 
        
        

        

        
    

     

  
    return(
    
                        
                       
                        
           

            


          


         
             
             <div className={classes.CategoryContentWrapper}>
                 <div className={classes.HeaderWrapper}><p className={classes.NameHeader}>{props.data}	</p></div>
                 <div className={classes.DeleteIconWrapper}>
                     <i className={["far", "fa-trash-alt tm-product-delete-icon", classes.Icons].join(' ')}></i> 
                     </div>
             </div>





           



         
    )
  }


