import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

type TSize = {
  id: number;
  size: string;
};

interface ISizes {
  sizes: Array<TSize>;
  isDark: boolean;
}

const Sizes: React.FC<ISizes> = ({ sizes, isDark }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <Box
      sx={{
        display: 'flex',
        columnGap: '8px',
      }}
    >
      {sizes.map((item, index) => (
        <Button
          onClick={() => setActiveItem(item.id)}
          key={index}
          variant={'text'}
          sx={{
            width: '38px',
            height: '38px',
            padding: '0',
            minWidth: '0',
            fontSize: '16px',
            // fontWeight: 500,
            letterSpacing: 0,
            fontWeight: activeItem === item.id ? 600 : 400,
            bgcolor: isDark
              ? activeItem === item.id
                ? '#fff'
                : '#474852'
              : activeItem === item.id
              ? '#000'
              : '#fff',

            color: isDark
              ? activeItem === item.id
                ? '#000'
                : '#797b8c'
              : activeItem === item.id
              ? '#fff'
              : '#d7d5d6',
            borderRadius: '50%',

            transition: 'all .5s',

            '&:hover': {
              bgcolor: isDark
                ? activeItem === item.id
                  ? '#fff'
                  : '#71727c'
                : activeItem === item.id
                ? '#000'
                : '#cac4c4',
              color: isDark
                ? activeItem === item.id
                  ? '#000'
                  : '#9e9fac'
                : activeItem === item.id
                ? '#fff'
                : '#a09399',
            },
          }}
        >
          {item.size}
        </Button>
      ))}
    </Box>
  );
};

export default Sizes;
