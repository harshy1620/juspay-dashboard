import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    toggleNotifications: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggleNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
