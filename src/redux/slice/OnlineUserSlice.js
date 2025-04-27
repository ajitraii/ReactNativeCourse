import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProduct = createAsyncThunk('onlineProduct', async () => {
    const response = await fetch('https://fakestoreapi.comm/product')
    return await response.json()
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.isLoading = true,
            state.error = null

        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false,
            state.product = action.payload

        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.isLoading = false,
            state.error = action.payload
        })
    }
})



export default productSlice.reducer