import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './CheckoutForm';
import PaymentForm from './PaymentForm';
import Header from "../Header/Header";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },

  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',

    },

  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(700 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
      backgroundColor: 'rgb(248, 246, 244)',

    },

  },
  stepper: {
    padding: theme.spacing(5, 0, 5),
    fontWeight: 'bold',
    backgroundColor: 'rgb(248, 246, 244)',


  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',

  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    border: "none"    
  },
}));

const steps = ['Shipping address', 'Payment details', 'Confirm Order'];

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
                  Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function getStepContent(step, formValues = null, changeFormValue = null) {
  switch (step) {
  case 0:
    return <AddressForm addressValues={formValues} changeAddressValue={changeFormValue} />;
  case 1:
    return <PaymentForm paymentFormValues={formValues} changePaymentFormValue={changeFormValue}  />;
  default:
    throw new Error('Unknown step');
  }
}

export default function Checkout(props) {
  const classes = useStyles();
  const [paymentFormValues, setPaymentFormValues] = React.useState({});
  const [addressFormValues, setAddressFormValues] = React.useState({});
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const changeAddressFormValue = (key, value) => {
    let values = { ...addressFormValues };
    values[key] = value;
    setAddressFormValues(values);
  };

  const changePaymentFormValue = (key, value) => {
    let values = { ...paymentFormValues };
    values[key] = value;
    setPaymentFormValues(values);
  };

  return (
    <React.Fragment>
        <Header/>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}></AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h3" align="center">
                        Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel><Typography component="h1" variant="h5" align="center">
                  {label} </Typography></StepLabel>
              </Step>
            ))}
          </Stepper>

          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                                    Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                                    Your order number is #2001539. We have emailed your order 
                                     confirmation, and will
                                     send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {
                  activeStep === 0 ? 
                    getStepContent(activeStep, addressFormValues, changeAddressFormValue)
                    : activeStep === 1 ?  getStepContent(activeStep, paymentFormValues, changePaymentFormValue)
                      : getStepContent(activeStep)
                }
                {activeStep === 0 ? <Button onClick={() => {
                  // All the address values will be availabe in addressFormValues object for further processes
                  console.log(addressFormValues);
                }}>Submit Address</Button> : null}
                {    <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button variant="contained" style={{outline: 'none'}} 
                      className={classes.button}
                      onClick={handleBack}
                    >
                        Back
                    </Button>
                  )}
                  <Button style={{outline: 'none'}}
                    variant="contained"
                    color="secondary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div> }
              </React.Fragment>
            )}
            <React.Fragment>
              
            </React.Fragment>
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}