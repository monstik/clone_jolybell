import { Box, Popover, Typography } from '@mui/material';
import React from 'react';
import { useMediaQuery } from '@mui/material';
import MenuItem from './MenuItem/MenuItem';
import PopoverItem from './PopoverItem/PopoverItem';
import DialogMenu from './DialogMenu/DialogMenu';

const mockData = [
  {
    name: 'Новое',
    to: '/category/new',
  },
  {
    name: 'Футболки',
    to: '/category/t-shirts',
  },
  {
    name: 'Свитшоты',
    to: '/category/sweatshirts',
  },
  {
    name: 'Худи',
    to: '/category/hoodies',
  },
  {
    name: 'Рюкзаки',
    to: '/category/bags',
  },
  {
    name: 'Штаны/шорты',
    to: '/category/pants-shorts',
  },
  {
    name: 'Поло',
    to: '/category/polo',
  },
  {
    name: 'Рубашки',
    to: '/category/shirts',
  },
  {
    name: 'Шапки',
    to: '/category/hats',
  },
  {
    name: 'Кепки',
    to: '/category/caps',
  },
  
];

const MainMenu = () => {
  const laptop = useMediaQuery('(min-width:1750px)');

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px',

        width: laptop ? 'calc(100vw - 500px)' : 'calc(100vw - 110px)',

        maxWidth: laptop ? '1100px' : 'auto',
      }}
    >
      {mockData.map((item, index) => (
        <MenuItem to={item.to} name={item.name} key={index} />
      ))}

      <PopoverItem />

      <MenuItem to={'/faq'} name={'FAQ'} />
      <DialogMenu />
    </Box>
  );
};

export default MainMenu;
