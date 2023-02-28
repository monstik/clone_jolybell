import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ProductState {
  isDark: boolean;
}

const initialState = {
  isDark: false,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {
    changeIsDark: (state, action: PayloadAction<boolean>) => {
      state.isDark = action.payload;
    },
  },
});

export const { changeIsDark } = productSlice.actions;

export const selectProductIsDark = (state: RootState) => state.product.isDark;

export default productSlice.reducer;
