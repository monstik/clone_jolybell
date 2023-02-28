import React from 'react';
import { Box, Button, TextField } from '@mui/material';

interface ICount {
  isDark: boolean;
}

const Count: React.FC<ICount> = ({ isDark }) => {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Button
        variant='text'
        sx={{
          width: '50px',
          height: '50px',
          minWidth: '0',
          color: isDark ? '#fff' : '#000',
          border: isDark ? '2px solid #fff' : '2px solid #000',
          borderRight: 'none',
          borderRadius: '50% 0 0 50%',
          transition: 'all .5s',
          fontSize: '25px',
          '&:hover': {
            color: isDark
              ? 'rgba(255, 255, 255, 0.7)'
              : 'rgba(41, 40, 40, 0.7)',
            bgcolor: 'rgba(124, 124, 124, 0.1)',
            borderColor: isDark
              ? 'rgba(255, 255, 255, 0.7)'
              : 'rgba(41, 40, 40, 0.7)',
          },
        }}
      >
        -
      </Button>
      <TextField
        value={'1'}
        sx={{
          width: '50px',
          height: '50px',
          border: isDark ? '2px solid #fff' : '2px solid #000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: isDark ? '#fff' : '#000',
          '& input': {
            padding: '0',
            textAlign: 'center',
            color: isDark ? '#000' : '#fff',

            // height: '50px',
          },

          '& fieldset': {
            border: 'none',
          },
          padding: '0px!important',
        }}
      />
      <Button
        variant='text'
        sx={{
          width: '50px',
          height: '50px',
          minWidth: '0',
          color: isDark ? '#fff' : '#000',
          border: isDark ? '2px solid #fff' : '2px solid #000',
          borderLeft: 'none',
          borderRadius: '0 50% 50% 0',
          transition: 'all .5s',
          fontSize: '22px',
          '&:hover': {
            color: isDark
              ? 'rgba(255, 255, 255, 0.7)'
              : 'rgba(41, 40, 40, 0.7)',
            bgcolor: 'rgba(124, 124, 124, 0.1)',
            borderColor: isDark
              ? 'rgba(255, 255, 255, 0.7)'
              : 'rgba(41, 40, 40, 0.7)',
          },
        }}
      >
        +
      </Button>
    </Box>
  );
};

export default Count;
