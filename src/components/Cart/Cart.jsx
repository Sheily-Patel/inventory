import React from 'react';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Header from "../Header/Header";


const useStyle = makeStyles({
  head: {
    marginTop: "3%",
    marginLeft: "46%"
  },
  heading: {
    marginLeft: "2%",
  }
});

function Cart() {
  const classes = useStyle();
  return (
    <div>
      <Header/>
      <h2 className={classes.head}>My Cart</h2>
      <Divider/>
    </div>
  )
}

export default Cart;