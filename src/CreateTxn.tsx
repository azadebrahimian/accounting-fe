import { useState } from "react";
import {
    TextField,
    RadioGroup,
    FormControlLabel,
    Radio,
    InputAdornment,
} from "@mui/material";

import "./CreateTxn.scss";

function CreateTxn() {
    const [amountError, setAmountError] = useState(false);
    const [amount, setAmount] = useState(0);

    const amountErrorMessage = "Amount entered must be a number.";

    return (
        <div className="create-main">
            <h1>Create a new transaction here.</h1>
            <form className="create-form">
                <TextField
                    variant="standard"
                    label="Amount"
                    error={amountError}
                    helperText={amountError && amountErrorMessage}
                    onChange={(e) => {
                        const convertedAmount = Number(e.target.value);
                        if (isNaN(convertedAmount)) {
                            setAmountError(true);
                        } else {
                            setAmount(convertedAmount);
                            setAmountError(false);
                        }
                    }}
                />
                <TextField variant="standard" label="Location" />
                <RadioGroup row defaultValue="spent">
                    <FormControlLabel
                        value="spent"
                        label="Spent"
                        control={<Radio />}
                    />
                    <FormControlLabel
                        value="received"
                        label="Received"
                        control={<Radio />}
                    />
                </RadioGroup>
            </form>
        </div>
    );
}

export default CreateTxn;
