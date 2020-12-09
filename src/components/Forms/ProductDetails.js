import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
    Grid,
    FormControlLabel,
    Checkbox,
    Divider,
    FormControl,
    FormLabel,
    FormGroup,
    RadioGroup,
    Radio,
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
    },
    formControl: {
        marginTop:'1%'
    }
});

const ProductDetails = () => {
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
                Product Details
        </Typography>
            <form>
                <Typography className={classes.formHeadings}> Value Aded Services</Typography>
                <Grid container spacing={3} style={{ padding: 50, paddingTop: 10, paddingBottom: 20 }}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Services</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked name="gilad" />}
                                label="Gilad Gray"
                            />
                            <FormControlLabel
                                control={<Checkbox checked name="jason" />}
                                label="Jason Killian"
                            />
                            <FormControlLabel
                                control={<Checkbox checked name="antoine" />}
                                label="Antoine Llorca"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
                <Divider />
                <Typography className={classes.formHeadings} >Product Details</Typography>

                <Grid container spacing={3} style={{ padding: 50, paddingTop: 10 }}>

                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Select Unit</FormLabel>
                        {/* TODO add onChange and value Prop to RadioGroup */}
                        <RadioGroup row aria-label="unit" name="unit1">
                            <FormControlLabel value="meter" control={<Radio />} label="Meter" />
                            <FormControlLabel value="inches" control={<Radio />} label="Inches" />
                            <FormControlLabel value="centimeters" control={<Radio />} label="Centimeters" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </form>
        </CardContent>
    )
}

export default ProductDetails;
