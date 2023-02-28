import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface MenuState {
  color: string;
}

const initialState: MenuState = {
  color: 'transparent',
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,

  reducers: {
    changeMenuColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});

export const { changeMenuColor } = menuSlice.actions;

export const selectMenuColor = (state: RootState) => state.menu.color;

export default menuSlice.reducer;
