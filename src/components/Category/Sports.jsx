import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import { sports } from '../../Data/data';

const useStyle = makeStyles({
    product : {
        margin: "1.5%",
    }
});
export default function Sports() {
    const classes = useStyle();
  return (
    <ImageList sm={{ width: 8, height: 8 }} cols={5} rows={1} className={classes.product}>
      {sports.map((sports) => (
        <ImageListItem key={sports.image}>
          <img
            src={`${sports.image}`}
            alt={sports.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={sports.name}
            subtitle={sports.price}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${sports.name}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}