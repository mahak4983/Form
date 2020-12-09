import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    Button,
} from '@material-ui/core';
import BuyerDetails from './BuyerDetails';
import ProductDimensions from './ProductDimensions';
import ProductDetails from './ProductDetails';



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
 
const steps = 3;

function getStepContent(step) {
    switch (step) {
        case 0:
            return <BuyerDetails />;
        case 1:
             return <ProductDimensions/>
        case 2:
             return <ProductDetails/>
        default:
            throw new Error('Unknown step');
    }
}

export default function SimpleCard() {
    const classes = useStyles();
    //Handle Page Change
    const [activeStep, setactiveStep] = useState(0)

    const handleNextClick = () => {
        setactiveStep(activeStep + 1);
    }
    const handleBackClick = () => {
        setactiveStep(activeStep - 1);
    }

    return (
        <Card className={classes.root}>
            {getStepContent(activeStep)}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    margin: 20
                }}
            >
                {activeStep !== 0 && (
                    
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleBackClick}
                    style={{marginRight:'5px'}}
                >
                    Back
              </Button>
                )}
                {activeStep !== 2 && (
                    
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNextClick}
                >
                    Next
              </Button>
                )}
                {/* TODO add Orderhandler */}
                {activeStep === 2&&(
                    <Button
                        variant="contained"
                        color="primary"
                        // onClick={handleNextClick}
                    >
                        Order
                    </Button>
                )}
            </div>
        </Card>
    );
}