import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from "../Header/Header";

const AddInventory = () => {
  const theme = createTheme();
  const add=(event)=>{
    event.preventDefault();
    const formData=event.target;
    const newProduct={
      product_name: formData.product_name.value,
      price: formData.price.value,
      quantity: formData.quantity.value
    }
    console.log(newProduct);
  }
  return (
      <ThemeProvider theme={theme}>
        <Header/>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        > 
  
          <Box component="form" onSubmit={add} noValidate sx={{ mt: 1 }}>
            <TextField 
              margin="normal"
              required
              fullWidth
              id="name"
              label="Product Name"
              name="product_name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="Price"
              type="number"
              id="price"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="quantity"
              label="Quantity"
              type="number"
              id="quantity"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add To Inventory
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AddInventory;