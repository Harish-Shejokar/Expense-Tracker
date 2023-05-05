import { createSlice } from "@reduxjs/toolkit";

const intialThemeState = { theme: "light" };

const themeSlice = createSlice({
    name : "theme",
    initialState: intialThemeState,
    reducers: {
        switchTheme(state) {
            if (state.theme === "dark") state.theme = "light";
            else state.theme = "dark";
        }
    }
})

export const themeAction = themeSlice.actions;

export default themeSlice.reducer;