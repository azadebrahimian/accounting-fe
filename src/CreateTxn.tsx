import { useState } from 'react';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';

import "./CreateTxn.scss";

function CreateTxn() {
  return (
    <div className="create-main">
      <h1>Create a new transaction here.</h1>
      <form className="create-form">
          <TextField variant="standard" label='Amount' />
          <TextField variant="standard" label='Location' />
      </form>
    </div>
  );
}

export default CreateTxn;
