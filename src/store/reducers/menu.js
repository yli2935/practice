/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-18 14:40:12
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-21 16:41:11
 * @FilePath: /practie/practice/src/store/reducers/menu.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  openItem: ['introduction'],
  defaultId: 'introduction',
  openComponent: 'buttons',
  drawerOpen: false,
  componentDrawerOpen: true
};

// ==============================|| SLICE - MENU ||============================== //

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    activeItem(state, action) {
      state.openItem = action.payload.openItem;
    },

    activeComponent(state, action) {
      state.openComponent = action.payload.openComponent;
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload.drawerOpen;
    },

    openComponentDrawer(state, action) {
      state.componentDrawerOpen = action.payload.componentDrawerOpen;
    }
  }
});

export default menu.reducer;

export const { activeItem, activeComponent, openDrawer, openComponentDrawer } = menu.actions;