import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { mob } from '../../Data/data';
import { fashion } from '../../Data/data';
import { electronics } from '../../Data/data';
import { sports } from '../../Data/data';
import { accessories } from '../../Data/data';
import { beauty } from '../../Data/data';

const useStyle = makeStyles({
    container: {
        marginTop: "2%",
    },
    tab: {  
        margin: "2%"
    }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const classes = useStyle();
  return (
    <Box sx={{ bgcolor: 'background.paper', width: "100%" }} className={classes.container}>
      <AppBar position="static" FullWidthTabs>
        <Tabs FullWidthTabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Mobile" {...a11yProps(0)} />
          <Tab label="Fashion" {...a11yProps(1)} />
          <Tab label="Electronics" {...a11yProps(2)} />
          <Tab label="Sports" {...a11yProps(3)} />
          <Tab label="Accessories" {...a11yProps(4)} />
          <Tab label="Beauty" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} className={classes.tab}>
        <ImageList sx={{ width: 800, height: 800, marginTop: "5%" }} cols={3}>
        <ImageListItem cols={1} rows={5}>
        </ImageListItem>
            {mob.map((mob) => (
                <ImageListItem key={mob.image}>
                <img
                src={`${mob.image}?w=248&fit=crop&auto=format`}
                srcSet={`${mob.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <ImageList sx={{ width: 800, height: 800, marginTop: "5%" }} cols={3}>
        <ImageListItem cols={1} rows={5}>
        </ImageListItem>
            {fashion.map((fashion) => (
                <ImageListItem key={fashion.image}>
                <img
                src={`${fashion.image}?w=248&fit=crop&auto=format`}
                srcSet={`${fashion.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <ImageList sx={{ width: 800, height: 800, marginTop: "5%" }} cols={3}>
        <ImageListItem cols={1} rows={5}>
        </ImageListItem>
            {electronics.map((electronics) => (
                <ImageListItem key={electronics.image}>
                <img
                src={`${electronics.image}?w=248&fit=crop&auto=format`}
                srcSet={`${electronics.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction} className={classes.tab}>
        <ImageList sx={{ width: 800, height: 800, marginTop: "5%" }} cols={3}>
        <ImageListItem cols={1} rows={5}>
        </ImageListItem>
            {sports.map((sports) => (
                <ImageListItem key={sports.image}>
                <img
                src={`${sports.image}?w=248&fit=crop&auto=format`}
                srcSet={`${sports.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
        </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
          <ImageList sx={{ width: 800, height: 800, marginTop: "5%" }} cols={3}>
        <ImageListItem cols={1} rows={5}>
        </ImageListItem>
            {accessories.map((accessories) => (
                <ImageListItem key={accessories.image}>
                <img
                src={`${accessories.image}?w=248&fit=crop&auto=format`}
                srcSet={`${accessories.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={accessories.name}
                loading="lazy"
            />
          <ImageListItemBar
            title={accessories.name}
            subtitle={accessories.price}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${accessories.name}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
          <ImageList sx={{ width: 800, height: 800, marginTop: "5%" }} cols={3}>
        <ImageListItem cols={1} rows={5}>
        </ImageListItem>
            {beauty.map((beauty) => (
                <ImageListItem key={beauty.image}>
                <img
                src={`${beauty.image}?w=248&fit=crop&auto=format`}
                srcSet={`${beauty.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={beauty.name}
                loading="lazy"
            />
          <ImageListItemBar
            title={beauty.name}
            subtitle={beauty.price}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${beauty.name}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
          </TabPanel>
      </SwipeableViews>
    </Box>
  );
}