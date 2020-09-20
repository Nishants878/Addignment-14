import React from 'react';
import classes from './LoginPage.module.css';
import {useFormik} from 'formik';
import * as Yup from 'yup';



const LoginPage = (props)=>{

     const {handleSubmit, handleChange, values,touched, errors, handleBlur} = useFormik({
         initialValues:{
             username:'',
             password:""
         },
         validationSchema: Yup.object({
             username: Yup.string().max(10, 'Username must be shorter than 10 Characters').required('Required'),
             password:Yup.string().min(6,'Password should be longer than 6 characters').matches(/(?=.*[0-9])/, "Password must contain a number.").required("Required")
         }),
         onSubmit:(values) =>{
            
            props.history.push("/dashboardpage");

         }
     })
    

   
    
   
    return(
        <div className={classes.LoginMainContainer}>
            <div className={classes.FormMainWrapper}>
                <form className={classes.Form} onSubmit={handleSubmit} autoComplete="off">
                    <h3 className={classes.FormHeader}>
                    Welcome to Dashboard, Login
                    </h3>
                    <div className={classes.InputAndLabelContainerUsername}>
                    <label className={classes.Label} htmlFor="username">Username</label>
                    <input
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                     name="username" 
                     type="text" 
                     class={classes.InputValue} 
                     id="username" 
                     />
                     {touched.username && errors.username ? (
                         <div className={classes.Error}>{errors.username}</div>
                     ):null}
                    </div>
                    <div className={classes.InputAndLabelContainerPassword}>
                    <label className={classes.Label} htmlFor="password">Password</label>
                    <input 
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password" 
                    type="password" 
                    class={classes.InputValue} 
                    id="password"/>
                     {touched.password && errors.password ? (
                         <div className={classes.Error}>{errors.password}</div>
                     ):null}
                    </div>
                    <div className={classes.LoginButton}>
                    <button className={classes.Button} type='submit'><p>Login</p></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;