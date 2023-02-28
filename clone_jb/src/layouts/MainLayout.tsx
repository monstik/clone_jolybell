import { Box } from '@mui/material';
import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

interface IMainLayout {
  // children: ReactNode;
  // headerColor?: string | any;
}

const MainLayout: React.FC<IMainLayout> = ({
  // children,
  //  headerColor,
}) => {
  return (
    <Box
      sx={{
       bgcolor: '#000'
      }}
    >
      <Header />
      <Outlet/>
    </Box>
  );
};

export default MainLayout;
