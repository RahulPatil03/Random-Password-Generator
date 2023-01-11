import { FormControlLabel } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Head from 'next/head';
import { useState, useEffect, useCallback } from 'react';

export default function Home() {
  const [options, setOptions] = useState({ option0: false, option1: false, option2: false });
  const [length, setLength] = useState(0);
  const [ready, setReady] = useState(false);

  const changeOptions = useCallback((e: any) => setOptions({ ...options, [e.target.name]: e.target.checked }), [options]);

  const changeLength = useCallback((e: any) => {
    const lengthInput = parseInt(e.target.value);
    if (Boolean(lengthInput)) setLength(lengthInput);
    else setLength(0);
  }, []);

  const generatePassword = useCallback(() => {
    const characters = ['0123456789', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'];
    let generatorString = '';
    Object.values(options).forEach((value, index) => { if (value) generatorString += characters[index] });
    let password = '';
    let passwordLength = length;
    while (passwordLength--) password += generatorString[Math.round(Math.random() * (generatorString.length - 1))];
    console.log(password);
  }, [length, options]);

  useEffect(() => {
    if (Object.values(options).every(v => !v) || length < 2) setReady(false);
    else setReady(true);
  }, [length, options]);

  return <>
    <Head>
      <title>Random Password Generator</title>
    </Head>
    <Box p={1}>
      <FormControlLabel control={<Checkbox />} label="0-9" name='option0' onChange={changeOptions} />
      <FormControlLabel control={<Checkbox />} label="A-Z" name='option1' onChange={changeOptions}/>
      <FormControlLabel control={<Checkbox />} label="a-z" name='option2' onChange={changeOptions}/>
      <TextField type='number' inputProps={{ min: 2 }} onChange={changeLength} />
      <Button variant="outlined" disabled={!ready} onClick={generatePassword}>Generate Password</Button>
    </Box>
  </>
}
