import React, { useEffect, useRef, useState, FC } from 'react';
import { Button, TextField } from '@mui/material'

/* To use for props*/
interface LinkTitleInputProps {
  title: string;
}

const LinkTitleInput = () => {
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
	<>
	  <div><TextField onChange={getCurrentValue} id="url-input" label="page name input" variant="outlined" /></div>
      <div><Button variant="contained" onClick={addNewPage}>Submit</Button></div>
      <div>{decidedUrl}</div>
	</>
	)
}

export default LinkTitleInput;