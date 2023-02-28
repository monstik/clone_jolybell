import { Button, IconButton, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import NumberFormat from 'react-number-format';
import React from 'react';

const Basket = () => {
  return (
    <Button
      disableRipple
      sx={{
     
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        minWidth: 0,
      }}
    >
      <Box
        sx={{
          padding: 0,
          // display: 'flex',
          // alignItems: 'center',
          // marginBottom: '5px',

          // width: '21px',
          // height: '27px',
          // verticalAlign: 'center',

          '& svg': {
            fill: '#fff',
            transition: 'fill .3s',
          },

          '&:hover': {
            '& svg': {
              fill: grey[500],
            },
          },
        }}
      >
        <svg
          className='cart'
          width='21px'
          height='21px'
          xmlns='http://www.w3.org/2000/svg'
          // viewBox=''
        >
          <path d='M6.02 7L4.27 0H.11v1.75h2.84l3.5 14h11.81L20.89 7H6.02zm10.93 7H7.77L6.45 8.75h12.03L16.95 14zM9.3 16.63c1.21 0 2.19.98 2.19 2.19S10.5 21 9.3 21s-2.19-.98-2.19-2.19.98-2.18 2.19-2.18zm3.93 2.18a2.19 2.19 0 104.379.001 2.19 2.19 0 00-4.379-.001z'></path>
        </svg>
      </Box>
      <Typography
        fontSize='15px'
        sx={{
          color: '#fff',
          margin: '0 5px 0 10px',
        }}
      >
        <NumberFormat
          displayType='text'
          value={'100'}
          thousandSeparator={' '}
        />
      </Typography>
      <Typography fontSize='15px'
      sx={{color: '#fff'}}
      >UAH</Typography>
    </Button>
  );
};

export default Basket;
