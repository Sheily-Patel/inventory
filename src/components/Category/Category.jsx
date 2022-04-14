import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Header from "../Header/Header";
import Categories from './Categories';
import { makeStyles } from '@material-ui/core';
import { Container } from '@mui/material';

export default function Category(props) {
    const [category, setCategoty] = useState(true);

const useStyle = makeStyles({
    form: {
        padding: 25,
        marginTop: "1%",
        background: "f2f2f2",
    }
});

// const handleChange = (event) => {
//     setCategoty(event.target.value);
// }

    const classes = useStyle();
    return (
        <div>
            <Header/>
            <Container className={classes.form}>
                {/* <FormControl fullWidth> */}
                    {/* <InputLabel id="demo-simple-select-label" className={classes.category}>Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Category"
                            onChange={handleChange}
                        >
                            <MenuItem>Mobile</MenuItem>
                            <MenuItem>Fashion</MenuItem>
                            <MenuItem>Electronics</MenuItem>
                            <MenuItem>Sports</MenuItem>
                            <MenuItem>Accessories</MenuItem>
                            <MenuItem>Beauty</MenuItem>
                        </Select> */}
                {/* </FormControl> */}
                <Categories/>
            </Container>
        </div>
        
    );
};
