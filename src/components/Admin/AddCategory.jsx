import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from "../Header/Header";

const AddCategory = () => {
  const theme = createTheme();
  const add=(event)=>{
    event.preventDefault();
    const formData=event.target;
    const newProduct={
      product_name: formData.category_name.value,
      price: formData.price.value,
      quantity: formData.description.value
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
              label="Category Name"
              name="category_name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              id="description"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Category
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AddCategory;