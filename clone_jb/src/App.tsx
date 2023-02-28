import React from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div>
      <CssBaseline />
      <AppRouter />
    </div>
  );
}

export default App;
