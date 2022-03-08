import React, { useEffect, useRef, useState, FC } from 'react';
import './App.css';
import { Button, Link, TextField } from '@mui/material'
import LinkTitleInput from './components/LinkTitleInput'

/* To use for props*/
/*interface TitleProps {
  
}*/

const App = () => {
 
  return (
    <div className="App">
      <div style={{ padding: "20px" }}>The beginning of All Linkz</div>
      <LinkTitleInput />
    </div>
  );
}

export default App;
