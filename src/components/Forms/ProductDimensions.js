import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
    TextField,
    Grid,
    FormControlLabel,
    Checkbox,
    Divider,
    InputAdornment,
    FormControl,
    Radio,
    RadioGroup,
    FormLabel,
} from '@material-ui/core'
const useStyles = makeStyles(theme => ({
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
    form: {
        paddingLeft: '10%',
        paddingRight: '10%',
        [theme.breakpoints.down('sm')]: {
            padding:'0%',
        },
    
    },
    radioButton: {
        marginTop: '5%',
        [theme.breakpoints.down('sm')]: {
            margin: '10%',
        },
    },
    
    formHeadings: {
        margin: 20,
        marginBottom: 0
    }
}));

const ProductDimensions = () => {
    const classes = useStyles();

    //State Variables for form fields

    // const [name, setName] = useState('');
    // const [phoneNumber, setphoneNumber] = useState(0);
    // const [weightNumber, setweightNumber] = useState(0);
    // const [email, setemail] = useState('');
    // const [add1, setadd1] = useState('');
    // const [add2, setadd2] = useState('');
    // const [pin, setpin] = useState(0);
    // const [length, setlength] = useState('');
    // const [state, setstate] = useState('');
    // const [country, setcountry] = useState('');
    // const [companyName, setcompanyName] = useState('');


    return (
        <CardContent style={{ padding: 0 }}>
            <Typography className={classes.title} gutterBottom style={{ backgroundColor: '#66bb6a' }}>
                Product Dimensions
        </Typography>
            <form className={classes.form}>
                
                <Grid container spacing={3} style={{ padding: 50, paddingTop: 10, paddingBottom: 20 }}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            type="number"
                            id="units"
                            name="units"
                            label="No of Units"
                            fullWidth
                            autoComplete="units"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="number"
                            id="weight"
                            name="weight"
                            label="Weight"
                            fullWidth
                            autoComplete="Weight"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                            }}

                        />
                    </Grid>
                </Grid>
                <Divider />
                <FormControl component="fieldset" className={classes.radioButton}>
                    <FormLabel component="legend">Select Unit</FormLabel>
                    {/* TODO add onChange and value Prop to RadioGroup */}
                    <RadioGroup row aria-label="unit" name="unit1">
                        <FormControlLabel value="meter" control={<Radio />} label="Meter" />
                        <FormControlLabel value="inches" control={<Radio />} label="Inches" />
                        <FormControlLabel value="centimeters" control={<Radio />} label="Centimeters" />
                    </RadioGroup>
                </FormControl>

                <Grid container spacing={3} style={{ padding: 50, paddingTop: 10 }}>

                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="height"
                            name="height"
                            label="Height"
                            fullWidth
                            autoComplete="Height"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            id="width"
                            name="width"
                            label="Width"
                            fullWidth
                            autoComplete="width"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="length"
                            name="length"
                            label="Length"
                            fullWidth
                            autoComplete="Length"
                        />
                    </Grid>
                </Grid>
                
            </form>
        </CardContent>
    )
}

export default ProductDimensions
