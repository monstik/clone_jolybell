import { Link, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface IMenuItem {
  to: string;
  name: string;
}

const MenuItem: React.FC<IMenuItem> = ({ to, name }) => {

   const laptop = useMediaQuery('(max-width:1230px)');
  return (
    <Box>
      <Link
        sx={{
          color: 'white',
          position: 'relative',

          '&:before': {
            content: "''",
            position: 'absolute',
            width: '0',
            height: '1px',
            bottom: '-3px',
            left: '50%',
            transform: 'translate(-50%,0%)',
            backgroundColor: '#fff',
            transformOrigin: 'center',
            visibility: 'hidden',
            transition: 'all 0.3s ease-in-out',
          },
          '&:hover:before': {
            visibility: 'visible',
            width: '100%',
          },
        }}
        underline='none'
        component={RouterLink}
        to={to}
      >
        <Typography
          component={'span'}
          sx={{ color: '#fff', textTransform: 'uppercase', fontSize:
          laptop ? '13px' : '15px' }}
        >
          {name}
        </Typography>
      </Link>
    </Box>
  );
};

export default MenuItem;
