import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth-slice";
import { noteReducer } from "./notes/notes-slice";

export const store = configureStore({
  reducer: {
    notesSlice: noteReducer,
    authSlice: authReducer,
  },
});
