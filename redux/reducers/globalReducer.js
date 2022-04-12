import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: "globalSlice",
    initialState: {
        activePage: "stock",
    },
    reducers: {
        setActivePage: (state, action) => {
            state.activePage = action.payload;
        }
    }
})

export const { setActivePage } = globalSlice.actions;
export default globalSlice.reducer;