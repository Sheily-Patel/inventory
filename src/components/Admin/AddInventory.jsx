import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}      

const theme = createTheme();

export default function SignUp() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQty] = useState("");
  const [success,setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setName("");
    setPrice("");
    setQty("");
    setSuccess(true);

     let response = await fetch("http://localhost:8800/api/inventory/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({name, price, quantity}),
      });
      let p = await response.json();
      console.log(p);
  };
  
  return (
    <>
    {success ? (
      <section>
        <h1>Inventory Added Successfully</h1>
        <p>
          <a href="/home">Go To Home</a>
        </p>
      </section>
    ): (
      <section>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Inventory Name"
                  label="Inventory Name"
                  name="inventory_name"
                  onChange={e => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="price"
                  label="Price"
                  type="Price"
                  id="Price"
                  onChange={e => setPrice(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  id="Quantity"
                  label="Quantity"
                  name="Quantity"
                  onChange={e => setQty(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button onClick={() => alert("Inventory Added")}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Inventory
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </section>
    )}
    </>
  );
};