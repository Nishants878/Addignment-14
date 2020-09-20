import React from 'react';
import classes from './AddProductPage.module.css';
import {useFormik} from 'formik';
import * as Yup from 'yup';



const AddProductPage = (props) =>{

   
    
    

    const {handleSubmit, handleChange, values,touched, errors, handleBlur} = useFormik({
        initialValues:{
            product:'',
            description:"",
            category:"",
            expiredate:0,
            units:0,


        },
        validationSchema: Yup.object({
            product: Yup.string().required('Required').matches(/(?=.*[0-9])/, "product must contain a number."),
            description:Yup.string().required("Required"),
            units:Yup.number().required("Required"),
            category:Yup.string().required("Required"),
            
        }),
        onSubmit:(values) =>{
           
          console.log("form data", values);
          props.history.push("/productpage");

        }
    })
    // console.log('Form values', formik.values)
    

    
    return(
        <div className={classes.AddProductPageMainContainer}>
                <div className={classes.InnerMainWrapper}>
                     <h4 className={classes.AddProductTitle}>Add Product</h4>
                     <form onSubmit={handleSubmit} className={classes.ProductForm}  autoComplete="off">
                         <div className={classes.FormFlexWrapper}>
                             <div className={classes.FormLeftWrapper}>
                                 <div className={classes.LabelAndInputWrapper}>
                             <label className={classes.Label} htmlFor="product">Product Name</label>
                    <input
                    
                     name="product" 
                     onChange={handleChange} 
                     value={values.product}
                     type="text" 
                     onBlur={handleBlur}
                     className={classes.InputValue} 
                     id="product" 
                     />
                     {touched.product && errors.product ? (
                         <div className={classes.Error}>{errors.product}</div>
                     ):null}
                     </div>
                     <div className={classes.LabelAndInputWrapper}>
                    <label className={classes.Label} htmlFor="description">Description</label>
                    <textarea
                    name="description" 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                     value={values.description} 
                    id="description" 
                    className={classes.TextArea}></textarea>
                     {touched.description && errors.description ? (
                         <div className={classes.Error}>{errors.description}</div>
                     ):null}
                    </div>

                    <div className={classes.LabelAndInputWrapper}>
                    <label className={classes.Label} htmlFor="category">Category</label>  
                    <select onChange={handleChange} onBlur={handleBlur} 
                     value={values.category}  name="category"  className={classes.SelectBox}>
       <option value="Select">Select Category</option>
          <option value="New Arrival">New Arrival</option>
          <option value="Most Popular">Most Popular</option>
          <option value="Trending">Trending</option>
          
       </select>
       {touched.category && errors.category ? (
                         <div className={classes.Error}>{errors.category}</div>
                     ):null}
                    </div>

                    <div className={classes.LabelAndInputWrapper}>
                   <div className={classes.MiniFlexWrapper}>
                       <div className={classes.DateWrapper}>
                       <label className={classes.Label} htmlFor="expiredate">Expire Date</label>
                       <input 
                       className={classes.InputForDate}
                       id="expiredate"  
                       type="date" 
                        
                       onChange={handleChange} 
                     value={values.expiredate} 
                       
                       name="expiredate" 
                       data-large-mode="true"/>
                        
                       
                       </div>
                       <div className={classes.StocksWrapper}>
                       <label className={classes.Label} htmlFor="units">Units In Stock</label>
                       <input 
                       className={classes.InputForNumber} 
                       id="units"  
                       onChange={handleChange} 
                     value={values.units} 
                       name="units" 
                       
                       type="number"  
                       />
                        {touched.units && errors.units ? (
                         <div className={classes.Error}>{errors.units}</div>
                     ):null}
                       </div>
                   </div>
                    </div>
                             </div>
                             <div className={classes.FormRightWrapper}>
                                <div className={classes.DummyPictureArea}>
                                <div className={classes.UploadIconWrapper}>
                                <label htmlFor="image">
                                <i className={["fas", "fa-cloud-upload-alt tm-upload-icon", classes.Icons].join(' ')}></i>
                                <input
                                className={classes.InputForFile}
                                
                                type="file"
                                id="image"
                                onChange={handleChange} 
                     
                                name="image"
                                data-original-title="upload photos"
                                />
                                </label>
                               
                                   
                    
                     </div>
                      
                                </div>
                                
                                <button   className={classes.UploadProductImageButton}>
                    Upload New Photo
                    
                </button>
                                 </div>
                         </div>
                         <button type="submit"  className={classes.UploadProductButton}>
                  Add Product Now
                    
                </button>
                     </form>
                </div>
        </div>
    )
}
export default AddProductPage;