import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name: "stockSlice",
    initialState: {
        categorySelected: "",
    },

    reducers: {
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload;
        }
    }
})

export const { setCategorySelected } = stockSlice.actions;
export default stockSlice.reducer;