import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import CategoryPage from '../../pages/CategoryPage';
// import CategoryPage from '../../pages/CategoryPage';
import MainPage from '../../pages/MainPage';
import ProductPage from '../../pages/ProductPage';

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='category/:categoryId' element={<CategoryPage />} />
          <Route path='product/:productId' element={<ProductPage />} />
        </Route>
        {/* <Route path='/' element={<MainPage />} /> */}
      </Routes>
    </div>
  );
};

export default AppRouter;
