import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name: "stockSlice",
    initialState: {
        categorySelected: "",
        productSelected: "",
        isAcordionOpen: false,
    },

    reducers: {
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload;
        },
        setProdcuctSelected: (state, action) => {
            state.productSelected = action.payload;
        },
        setIsAcordionOpen: (state, action) => {
            state.isAcordionOpen = action.payload;
        }
    }
})

export const { setCategorySelected, setProdcuctSelected, setIsAcordionOpen } = stockSlice.actions;
export default stockSlice.reducer;