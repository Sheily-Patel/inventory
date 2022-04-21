import React from 'react';
import Mobile from '../Category/Mobile';
import Fashion from '../Category/Fashion';
import Electronics from '../Category/Electronics';
import Accessories from '../Category/Accessories';
import Beauty from "../Category/Beauty";
import Header from '../Header/Header';
import Banner from './Banner';
import { useNavigate } from "react-router-dom";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Divider } from '@material-ui/core';

const useStyle = makeStyles({
  divider: {
    margin: "2%",
    fillRule: true
  },
  header: {
    padding: "0.2%",
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: "1%",
    marginBottom: "5%"
  },
  button: {
    marginLeft: "88%",
    position: "absolute",
    display: "flex"
  }
});
function Home() {
  const navigate = useNavigate();
  const classes = useStyle();
  return (
    <div>
      <section>
        <Header/>
      </section>
      <section>
        <Banner/>
      </section>
      <Divider className={classes.divider}/>
      <section>
        <h2 className={classes.header}>Mobile
        <Button variant='contained' className={classes.button} onClick={() => navigate('/category')}>View All</Button></h2>
        <Mobile/>
      </section>
      <Divider className={classes.divider}/>
      <section>
        <h2 className={classes.header}>Fashion
        <Button variant='contained' className={classes.button} onClick={() => navigate('/category')}>View All</Button></h2>
        <Fashion/>
      </section>
      <Divider className={classes.divider}/>
      <section>
        <h2 className={classes.header}>Electronics
        <Button variant='contained' className={classes.button} onClick={() => navigate('/category')}>View All</Button></h2>
        <Electronics/>
      </section>
      <Divider className={classes.divider}/>
      <section>
        <h2 className={classes.header}>Accessories
        <Button variant='contained' className={classes.button} onClick={() => navigate('/category')}>View All</Button></h2>
        <Accessories/>
      </section>
      <Divider className={classes.divider}/>
      <section>
        <h2 className={classes.header}>Beauty
        <Button variant='contained' className={classes.button} onClick={() => navigate('/category')}>View All</Button></h2>
        <Beauty/>
      </section>
    </div>
  )
}

export default Home;