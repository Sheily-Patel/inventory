import React from 'react';
import Header from "../Header/Header";
import { makeStyles } from '@material-ui/styles';
import { Divider } from '@material-ui/core';
import { data } from '../../Data/data';
import Inventory from '../Inventory/Inventory';

const useStyle = makeStyles({
  head: {
    marginLeft: "45%",
    marginTop: "2%"
  }
});
const Wishlist = () => {
  const classes = useStyle();
  return (
    <div>
        <Header/>
        <h2 className={classes.head}>My Wishlist</h2>
        <Divider/>
        <div className={classes.list}>
          {data.map((data, index) => {
            return(
              <Inventory image={data.image} name={data.name} description={data.description} price={data.price} data={data} key={index}/> 

            )
          })}
        </div>
    </div>
  )
}

export default Wishlist;