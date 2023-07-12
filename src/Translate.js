import React, { useState, useEffect } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';


function Translate() {
  return (
    <div>

      <Box margin={10}>
      <FormControl  fullWidth>
      <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
         
          rows={4}
          defaultValue="Default Value"
        />
        </FormControl>
      <FormControl  sx={{ m: 1}} fullWidth>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
    Age
  </InputLabel>
  <NativeSelect
    defaultValue={30}
  >
    <option value={10}>Ten</option>
    <option value={20}>Twenty</option>
    <option value={30}>Thirty</option>
  </NativeSelect>
      </FormControl>
      <FormControl  sx={{ m: 1 }} fullWidth >
      <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      </FormControl>
      </Box>
    

    </div>
  );
}
export default Translate;
