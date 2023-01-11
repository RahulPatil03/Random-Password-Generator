import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import type { AppProps } from 'next/app';
import { useMemo } from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(() => createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
    }
  }), [prefersDarkMode]);

  return <ThemeProvider theme={theme}>
    <Navbar />
    <Component {...pageProps} />
  </ThemeProvider>
}
