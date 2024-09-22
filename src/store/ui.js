import { createSlice } from "@reduxjs/toolkit";

const ui = createSlice({
    name: "ui",
    initialState: {
        navOpen: false
    },
    reducers: {
        setNavOpen: (state, action) => {
            state.navOpen = action.payload;
        }
    }
})

export const { setNavOpen } = ui.actions;
export default ui.reducer;