import React, { useState } from 'react';
import { Button, Typography, Box, useMediaQuery } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface IBasketButton {
  isDark: boolean;
}

const BasketButton: React.FC<IBasketButton> = ({ isDark }) => {
  const [active, setActive] = useState(false);
  const mobile = useMediaQuery('(max-width: 320px)');
  return (
    <Button
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      variant={'contained'}
      sx={{
        bgcolor: isDark ? '#fff' : '#000',

        width: mobile ? '90vw' : {
          xs: '300px',
          md: '260px',
          lg: '300px',
        },
        height: '50px',
        borderRadius: '100px',
        display: 'flex',

        alignItems: 'center',
        transition: 'all .5s',
        padding: 0,
        '&:hover': {
          bgcolor: isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.8)',
        },
      }}
    >
      <Typography
        sx={{
          color: isDark ? '#000' : '#fff',
          margin: '0 10px',
          fontSize: '14px',
          letterSpacing: '2px',
          whiteSpace: 'nowrap',
        }}
      >
        Добавить в корзину
      </Typography>
      <ArrowForwardIcon
        sx={{
          color: isDark ? '#000' : '#fff',
          transition: 'transform .5s',
          transform: active ? 'translate(10px, 0px)' : 'translate(-5px, 0) ',
        }}
      />
    </Button>
  );
};

export default BasketButton;
