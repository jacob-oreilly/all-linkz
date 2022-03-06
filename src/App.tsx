import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Button, TextField } from '@mui/material'

const App = () => {
  const [currentInput, setCurrentInput] = useState()
  const [decidedUrl, setDecidedUrl] = useState()
  const [buttonSubmitted, setButtenSubmitted] = useState(false)
  const getCurrentValue = (e: any) => {
    setCurrentInput(e.target.value)
  }

  const addNewPage = () => {
    setButtenSubmitted(true)
  }

  useEffect(() => {
    if (buttonSubmitted) {
      setDecidedUrl(currentInput)
      setButtenSubmitted(false)
    }
  })
  return (
    <div className="App">
      <div style={{ padding: "20px" }}>The beginning of All Linkz</div>
      <div><TextField onChange={getCurrentValue} id="url-input" label="page name input" variant="outlined" /></div>
      <div><Button variant="contained" onClick={addNewPage}>Submit</Button></div>
      <div>{decidedUrl}</div>
    </div>
  );
}

export default App;
