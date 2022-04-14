import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { makeStyles } from '@material-ui/styles';
import Header from "../Header/Header";
import { Divider } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    },
    favorite: {
      display: "flex",
      marginRight: "18%",
      marginBottom: "5%"
    }
});

export default function Inventory(){
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8800/api/products/").then(response => response.json()).then(inventory=>{setInventory(inventory)});
  }, []);
  const classes = useStyle();
  const navigate = useNavigate();
  return (
    <div>
      <Header/>
      <h2 className={classes.head}>Featured Products</h2>
      <Divider/>
      <ImageList cols={4} rows={4} sx={{ width: 1100, height: 1200, marginLeft: 50 }}>
      {inventory.map((inventory) => (
        <ImageListItem key={inventory.img}>
          <img
            src={`${inventory.image}?w=248&fit=crop&auto=format`}
            alt={inventory.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={inventory.title}
            subtitle={inventory.price}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${inventory.name}`}
              >
                <FavoriteIcon className={classes.favorite}/>
                <InfoIcon className={classes.icon} onClick={() => navigate("/details")}/>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  )
};