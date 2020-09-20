import React from 'react';
import classes from './ParticularProduct.module.css';


export default function ParticularProduct(props) {
    return(
        <div className={classes.ParticularProductWrapper}>
        <div className={classes.CheckBoxContainer}>
        <input type="checkbox" className={classes.Checkbox}/> 
            </div> 
            <div className={classes.ProductNameWrapper}>
                <p className={classes.WhiteFontName}>
                    {props.data.name}
                </p>
            </div>
            <div className={classes.UnitSoldWrapper}>
            <p className={classes.WhiteFontName}>
                    {props.data.unitSold}
                </p>
            </div>
            <div className={classes.InStockWrapper}>
            <p className={classes.WhiteFontName}>
            {props.data.stock}
                </p>
            </div>
            <div className={classes.ExpireDateWrapper}>
            <p className={classes.WhiteFontName}>
            {props.data.expireDate}
                </p>
            </div>
            <div className={classes.DeleteIconWrapper}>
            <i className={["far", "fa-trash-alt tm-product-delete-icon", classes.Icons].join(' ')}></i> 
            </div>
     </div>
    )
}
