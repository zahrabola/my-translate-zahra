import React, { useState, useEffect } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';


function Translate() {

  const [inputText, setInputText] = useState("")
  const [result, setReult] = useState("")

  const isTranslateText = () => {
    //console.log(inputText)
    setReult(inputText)
  }
  return (
    <div>
      <h1>Hello</h1>

      <Box margin={10}>
      <FormControl sx={{ m: 1}}  fullWidth>
      <TextField
          id="outlined-multiline-static"
          label="Translate"
          multiline
          control="TextArea"
          placeholder='Type Text to Translate..'
          rows={4}
          onChange={(event) => setInputText(event.target.value)}
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
          label=" Results"
          multiline
          placeholder='Your Result Translation..'
          rows={4}
          value={result}
        />
      </FormControl>
      <Button variant="contained" onClick={isTranslateText}>Translate</Button>
      </Box>
    

    </div>
  );
}
export default Translate;
