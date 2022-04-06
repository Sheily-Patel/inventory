import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import { mob } from '../../Data/data';

const useStyle = makeStyles({
    product : {
        margin: "1.5%",
    }
});
export default function Mobile() {
    const classes = useStyle();
  return (
    <ImageList sm={{ width: 5, height: 5 }} cols={5} rows={1} className={classes.product}>
      {mob.map((mob) => (
        <ImageListItem key={mob.image}>
          <img
            src={`${mob.image}`}
            alt={mob.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={mob.name}
            subtitle={mob.price}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${mob.name}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}