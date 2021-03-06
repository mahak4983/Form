import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  Divider,
  InputAdornment
} from '@material-ui/core'
const useStyles = makeStyles({
  root: {
    // minWidth: 275,
  },
  title: {
    fontSize: 20,
    height: 50,
    padding: 10,
    paddingLeft: 55,
    color: 'white'
  },
  formHeadings: {
    margin: 20,
    marginBottom: 0
  }
});

const BuyerDetails = () => {
  const classes = useStyles();

  //State Variables for form fields

  // const [name, setName] = useState('');
  // const [phoneNumber, setphoneNumber] = useState(0);
  // const [altPhoneNumber, setaltPhoneNumber] = useState(0);
  // const [email, setemail] = useState('');
  // const [add1, setadd1] = useState('');
  // const [add2, setadd2] = useState('');
  // const [pin, setpin] = useState(0);
  // const [city, setcity] = useState('');
  // const [state, setstate] = useState('');
  // const [country, setcountry] = useState('');
  // const [companyName, setcompanyName] = useState('');


  return (
    <CardContent style={{ padding: 0 }}>
      <Typography className={classes.title} gutterBottom style={{ backgroundColor: '#66bb6a' }}>
        Buyers Details
        </Typography>
      <form>
        <Typography className={classes.formHeadings}>Buyer details</Typography>
        <Grid container spacing={3} style={{ padding: 50, paddingTop: 10, paddingBottom: 20 }}>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="Name"
              name="Name"
              label="Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              type="number"
              id="Phone"
              name="Phone"
              label="Phone Number"
              fullWidth
              autoComplete="Phone"
              InputProps={{
                startAdornment: <InputAdornment position="start">+91</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              type="number"
              id="AltPhone"
              name="AltPhone"
              label="Alternate Phone Number"
              fullWidth
              autoComplete="Phone"
              InputProps={{
                startAdornment: <InputAdornment position="start">+91</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              type="email"
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
        </Grid>
        <Divider />
        <Typography className={classes.formHeadings} >Buyer Address</Typography>

        <Grid container spacing={3} style={{ padding: 50, paddingTop: 10 }}>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField required id="state" name="state" label="State/Province/Region" fullWidth />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              type="number"
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="company name"
              name="company name"
              label="Company Name (Optional)"
              fullWidth
              autoComplete="shipping company name"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default BuyerDetails
