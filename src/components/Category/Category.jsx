import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from "../Header/Header";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/styles';
import {accessories, fashion, beauty, electronics, mob, sports} from "../../Data/data";
import { useNavigate } from 'react-router-dom';

const useStyle = makeStyles({
  box: {
    marginTop: "2%"
  }
})

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [name, setName] = React.useState(0);

  const handleChange = async(event, newValue) => {
    setValue(newValue);
    setName("");

  let response = await fetch("http://localhost:8800/api/category/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({name}),
      });
      let p = await response.json();
      console.log(p);
  };

  const navigate = useNavigate();
  const classes = useStyle();
  return (
    <div>
      <Header/>
    <Box sx={{ width: '100%', height: "100%"}} className={classes.box}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label={"Mobile"} {...a11yProps(0)} />
          <Tab label="Fashion" {...a11yProps(1)} />
          <Tab label="Electronics" {...a11yProps(2)} />
          <Tab label="Accessories" {...a11yProps(3)} />
          <Tab label="Beauty" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} margin={5}>
      <ImageList cols={3} rows={4} sx={{ width: 850, height: 750, marginLeft: 5, marginTop: 5 }}>
      {mob.map((mob) => (
        <ImageListItem key={mob.image}>
          <img
            src={`${mob.image}?w=248&fit=crop&auto=format`}
            alt={mob.name}
            loading="lazy"
            onClick={() => navigate("/details")}
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
      <TabPanel value={value} index={1}>
      <ImageList cols={3} rows={4} sx={{ width: 850, height: 600, marginLeft: 5, marginTop: 5 }}>
      {fashion.map((fashion) => (
        <ImageListItem key={fashion.image}>
          <img
            src={`${fashion.image}?w=248&fit=crop&auto=format`}
            alt={fashion.name}
            loading="lazy"
            onClick={() => navigate("/details")}
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
      <TabPanel value={value} index={2}>
      <ImageList cols={3} rows={4} sx={{ width: 850, height: 500, marginLeft: 5, marginTop: 5 }}>
      {electronics.map((electronics) => (
        <ImageListItem key={electronics.image}>
          <img
            src={`${electronics.image}?w=248&fit=crop&auto=format`}
            alt={electronics.name}
            loading="lazy"
            onClick={() => navigate("/details")}
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
      <TabPanel value={value} index={3}>
      <ImageList cols={3} rows={4} sx={{ width: 850, height: 500, marginLeft: 5, marginTop: 5 }}>
      {sports.map((sports) => (
        <ImageListItem key={sports.image}>
          <img
            src={`${sports.image}?w=248&fit=crop&auto=format`}
            alt={sports.name}
            loading="lazy"
            onClick={() => navigate("/details")}
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
      <TabPanel value={value} index={4}>
      <ImageList cols={3} rows={4} sx={{ width: 850, height: 650, marginLeft: 5, marginTop: 5 }}>
      {accessories.map((accessories) => (
        <ImageListItem key={accessories.image}>
          <img
            src={`${accessories.image}?w=248&fit=crop&auto=format`}
            alt={accessories.name}
            loading="lazy"
            onClick={() => navigate("/details")}
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
      <TabPanel value={value} index={5}>
      <ImageList cols={3} rows={4} sx={{ width: 850, height: 600, marginLeft: 5, marginTop: 5 }}>
      {beauty.map((beauty) => (
        <ImageListItem key={beauty.image}>
          <img
            src={`${beauty.image}?w=248&fit=crop&auto=format`}
            alt={beauty.name}
            loading="lazy"
            onClick={() => navigate("/details")}
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
    </Box>
    </div>
  );
}