import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import { electronics } from '../../Data/data';

const useStyle = makeStyles({
    product : {
        margin: "1.5%",
    }
});
export default function Electronics() {
    const classes = useStyle();
  return (
    <ImageList sm={{ width: 8, height: 8 }} cols={5} rows={1} className={classes.product}>
      {electronics.map((electronics) => (
        <ImageListItem key={electronics.image}>
          <img
            src={`${electronics.image}`}
            alt={electronics.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={electronics.name}
            subtitle={electronics.price}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${electronics.name}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}