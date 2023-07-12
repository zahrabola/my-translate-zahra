import React, { useState, useEffect } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import NativeSelect from "@mui/material/NativeSelect";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

///https://libretranslate.de/?source=auto&target=fr&q=hello
function Translate() {
  const [inputText, setInputText] = useState("");
  const [result, setReult] = useState("");
  const [langlist, setLangList] = useState([]);
  const [selectlang, setSelectLang] = ([]);
  const [detectlang, setDetectLang] = ("");

  ///source function
  const getLangSource = () => {
    axios.post(`https://libretranslate.de/detect`, {
            q: inputText
        })
    .then((response) => {
      setDetectLang(response.data[0].lang)
    })
    .catch(err => {
      console.log(err)
    });
  }

  /////translate
  const isTranslateText = () => {
    //console.log(inputText)
    setReult(inputText);

    getLangSource();
    
//data
let data ={
  q : inputText,
  source:detectlang,
  target: selectlang,
}
///post api 
axios.post(`https://libretranslate.de/translate`, data)
.then((response) => {
  setReult(response.data.translatedText)
})


  };

  ////language Key
   const languageKey = ( selectedlang ) => {
    ///console.log(selectedlang.target.value)
    setSelectLang(selectedlang.target.value)
   }/// connected to post api

  ////language list
  useEffect(() => {
    axios.get(`https://libretranslate.de/languages`).then((response) => {
      ////console.log(response.data)
      setLangList(response.data);
    }) 
    getLangSource()
    
  }, [inputText]);
  return (
    <div>
      <h1>Hello</h1>

      <Box margin={10}>
        <FormControl sx={{ m: 1 }} fullWidth>
          <TextField
            id="outlined-multiline-static"
            label="Translate"
            multiline
            control="TextArea"
            placeholder="Type Text to Translate.."
            rows={4}
            onChange={(event) => setInputText(event.target.value)}
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Please Select Language..
          </InputLabel>
          <NativeSelect onChange={languageKey}>
            <option value={1}> Please Select Language.. </option>

            {langlist.map((lang) => {
              return <option value={lang.code}>{lang.name}</option>;
            })}
          </NativeSelect>
        </FormControl>
        <FormControl sx={{ m: 1 }} fullWidth>
          <TextField
            id="outlined-multiline-static"
            label=" Results"
            multiline
            placeholder="Your Result Translation.."
            rows={4}
            value={result}
          />
        </FormControl>
        <Button variant="contained" onClick={isTranslateText}>
          Translate
        </Button>
      </Box>
    </div>
  );
}
export default Translate;
