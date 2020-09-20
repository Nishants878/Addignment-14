import React, {useEffect, useState} from 'react';
import classes from './ProductPage.module.css';
import { Link } from "react-router-dom";
import Category from '../../Components/Category/Category';
import ParticularProduct from '../../Components/ParticularProduct/ParticularProduct';
export default function ProductPage(props) {
    const intitialState = {
        categoriesArray:[],
        productArray:[],
        
      }
      const [state, setState] = useState({...intitialState});

      
      const handleIncrementCLick =() => {
          let accesscategoriesArray = state.categoriesArray;
         let UpdatedcategoriesArray = accesscategoriesArray.push("new");
                
         setState({
            ...state,
            categoriesArray:    [UpdatedcategoriesArray] ,
            
          })
    }

    useEffect(() => {
        const DataMain =JSON.parse([localStorage.getItem("Data")]);
      const retrieveData = DataMain[0];
      console.log(retrieveData);
      const productpageData = retrieveData.productsPage;
      console.log(productpageData);
      const categoriesData = productpageData.categories;
      console.log(typeof(categoriesData));
      const mainEcma = categoriesData[0];
      console.log(mainEcma)
      const productsData = productpageData.products;
      console.log(productsData);
      const mainTcma = productsData[0];
      console.log(mainTcma)

        setState({
            ...state,
            categoriesArray:[...categoriesData],
            productArray:[...productsData],
          })
      }, [])

    

  
    return(
        <div className={classes.MainContainerProductPage}>
          
          {/* product wrapper section */}
          <div className={classes.MainContainerProductWrapper}>
         <div className={classes.InnerWrapperScroll}>
          <div className={classes.DescriptionDetailsWrapper}>
              <div className={classes.NameHeaderDiv}><p className={classes.HeaderTop}>PRODUCT NAME</p></div>
              <div className={classes.UnitHeaderDiv}><p className={classes.HeaderTop}>UNIT SOLD</p></div>
              <div className={classes.StocksHeaderDiv}><p className={classes.HeaderTop}>IN STOCK</p></div>
              <div className={classes.DateHeaderDiv}><p className={classes.HeaderTop}>EXPIRE DATE</p></div>
          </div>
          <div className={classes.ProductFlexWrapper}>

               {
                   state.productArray.map(item =>{
                       return <ParticularProduct data={item}/>
                   })
               }
              </div>

         </div>
         <Link to="/addproductpage"><button className={classes.AddNewButton}>
                    ADD NEW PRODUCT
                </button></Link>
                <button className={classes.DeleteButton}>
                    DELETE SELECTED PRODUCTS
                </button>
     </div>

            {/* category Section */}

            <div className={classes.MainContainerCategory}>
         <h4 className={classes.CategoryHeader}>Product Categories</h4>
         <div className={classes.InnerCategoryScrollWrapper}>
                 {
                     state.categoriesArray.map(item =>{
                        return <Category data={item}/>
                    })
                 }       
                       
         <Category/>


            </div>
         <button onClick={handleIncrementCLick} className={classes.NewCategoryButton}>
                    ADD NEW CATEGORY
                </button>
     </div>
            
           
            
            
        </div>
    )

}
