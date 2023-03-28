import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "store/store";

interface IUser {
  id: string;
  email: string;
}

interface IUserState {
  user: IUser;
}

const initialState = {
  user: {
    id: "",
    email: "",
  },
} as IUserState;

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    getUser: (state, action) => {
      return {
        user: {
          id: action.payload.id,
          email: action.payload.email,
        },
      };
    },
  },
});

export const selectUser = (state: RootState) => state.rootReducer.user;

export const { getUser } = userSlice.actions;
