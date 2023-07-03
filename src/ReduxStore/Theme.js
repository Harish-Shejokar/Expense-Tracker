import { createSlice } from "@reduxjs/toolkit";

let defaultTheme = localStorage.getItem("theme");

if (defaultTheme === null) defaultTheme = "ligthTheme";

const intialThemeState = { currTheme: defaultTheme };

const themeSlice = createSlice({
    name : "theme",
    initialState: intialThemeState,
    reducers: {
        switchTheme(state) {
            if (state.currTheme === "darkTheme") state.currTheme = "ligthTheme";
            else state.currTheme = "darkTheme";
            // console.log(state.currTheme);
        },
        logoutTheme(state) {
            state.currTheme = "ligthTheme";
        }
        
    }
})

export const themeAction = themeSlice.actions;

export default themeSlice.reducer;