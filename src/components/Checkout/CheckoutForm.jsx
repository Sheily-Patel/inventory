import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

const AddressForm = ({ addressValues, changeAddressValue }) => {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Customer Information
      </Typography><br /><br />

      <Grid container fluid spacing={2} >
        <Grid item xs={12} sm={6} >
          <label for="Firstname">First Name</label>
          <input type="text" class="form-control" id="inputFirstName" placeholder="Firstname"  value={addressValues.firstname} onChange={(e) => changeAddressValue('firstname', e.target.value)} />

        </Grid>
        <Grid item xs={12} sm={6}>
          <label for="Address">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="Address" value={addressValues.address} onChange={(e) => changeAddressValue('address', e.target.value)} />

        </Grid>
        {/* <Grid item xs={12}>
          <label for="Address">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="Address" value={addressValues.address} onChange={(e) => changeAddressValue('address', e.target.value)} />

        </Grid> */}
        <Grid item xs={12} sm={6}>
          <label for="City">City</label>
          <input type="text" class="form-control" id="inputCity" placeholder="City" value={addressValues.city} onChange={(e) => changeAddressValue('city', e.target.value)} />

        </Grid>

        <Grid item xs={12} sm={6}>
          <label for="State">State</label>

          <select id="inputState" class="form-control" >
            <option>Gujarat</option>
            <option>Maharashtra</option>
            <option>Madhya Pradesh</option>
            <option>Rajasthan</option>
            <option>Punjab</option>
            <option>Uttar Pradesh</option>
          </select>
        </Grid>
      </Grid>
    
    </React.Fragment>
  );
};

export default AddressForm;