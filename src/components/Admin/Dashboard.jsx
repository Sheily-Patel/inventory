import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material';
import Chart from './Chart';
import Deposits from './Deposits';
import Header from "../Header/Header";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const useStyle = makeStyles({
  container: {
    marginTop: "1%",
    marginBottom: "1%",
    position: "relative",
    marginRight: "8%",
  },
  button: {
    marginTop: "1%",
    position: "relative",
    display: "flex"
  },
  section: {
    marginTop: " 28% 28% 1% 1%",
    padding: "8%",
    display: "flex"
  }
})

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

const mdTheme = createTheme();

const Dashboard = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={mdTheme}>
      <Header/>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              <section className={classes.section}>
                <Button variant="contained" className={classes.container} onClick={() => navigate("/addcategory")}>Add Category</Button>
                </section>
                <section className={classes.section}>
                <Button variant="contained" className={classes.button} onClick={() => navigate("/addinventory")}>Add Inventory</Button>
              </section>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
     </ThemeProvider>
  );
};

export default Dashboard;