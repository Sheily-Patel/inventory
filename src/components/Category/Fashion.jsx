import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import { fashion } from '../../Data/data';

const useStyle = makeStyles({
    product : {
        margin: "1.5%",
    }
});
export default function Fashion() {
    const classes = useStyle();
  return (
    <ImageList sm={{ width: 5, height: 5 }} cols={5} rows={1} className={classes.product}>
      {fashion.map((fashion) => (
        <ImageListItem key={fashion.image}>
          <img
            src={`${fashion.image}`}
            alt={fashion.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={fashion.name}
            subtitle={fashion.price}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${fashion.name}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}