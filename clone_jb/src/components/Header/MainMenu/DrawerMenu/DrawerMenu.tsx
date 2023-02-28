import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import { grey } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/system';

import React, { useState } from 'react';

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <IconButton
          sx={{
            width: '50px',
            height: '50px',
            fill: '#fff',

            transition: 'fill .5s',
            '&:hover': {
              fill: grey[500],
            },
          }}
          onClick={toggleSlider}
        >
          <svg
            width={'36px'}
            height={'20px'}
            className='menu'
            xmlns='http://www.w3.org/2000/svg'
            viewBox=''
          >
            <path d='M36,2H0V0h36V2z M36,18H0v2h36V18z M36,9H0v2h36V9z'></path>
          </svg>
        </IconButton>
      </Box>

      <Drawer onClose={toggleSlider} anchor='right' open={open}>
        test
      </Drawer>
    </Box>
  );
};

export default DrawerMenu;
