import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { makeStyles } from '@material-ui/styles';
import Header from "../Header/Header";
import { Divider, lighten } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useStyle = makeStyles({
    product : {
        margin: "5%"
    },
    head: {
      marginTop: "3%",
      marginLeft: "45%",
      marginBottom: "2%"
    },
    icon: {
      display: "flex",
      marginRight: "20%",
      marginBottom: "5%"
    }
});

export default function Inventory(){
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/inventory/get_all").then(response => response.json()).then(inventory=>{setInventory(inventory)});
  }, []);
  const classes = useStyle();
  return (
    <div>
      <Header/>
      <h2 className={classes.head}>Featured Products</h2>
      <Divider/>
      <ImageList cols={4} rows={4} sx={{ width: 900, height: 900, marginLeft: 35 }}>
      {/* <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem> */}
      {inventory.map((inventory) => (
        <ImageListItem key={inventory.img}>
          <img
            src={`${inventory.image}?w=248&fit=crop&auto=format`}
            // srcSet={`${inventory.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={inventory.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={inventory.name}
            subtitle={inventory.price}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${inventory.name}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  )
};