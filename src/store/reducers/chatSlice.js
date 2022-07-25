import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isMainUser: true,
  userName: "",
  avatarUrl: "",
  activeFriend: "",
  room: "",
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuth = true;
      state.userName = action.payload.userName;
      state.room = action.payload.userName;
      state.activeFriend = action.payload.userName;
      state.avatarUrl = action.payload.url;
    },
    logout(state) {
      state.isAuth = false;
    },
    setUsername(state, action) {
      state.userName = action.payload;
      state.room = action.payload;
    },
    setActiveFriend(state, action) {
      state.activeFriend = action.payload;
    },
    setRoom(state, action) {
      state.room = action.payload;
    },
    setIsmainUser(state, action) {
      state.isMainUser = action.payload;
    },
    setActiveUser(state, action) {
      state.room = action.payload;
      state.activeFriend = action.payload;
    },
  },
});
