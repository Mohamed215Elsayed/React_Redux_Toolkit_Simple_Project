import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const FetchProducts = createAsyncThunk(
    "productsSlice/FetchProducts",
    async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        return data;
    });
export const productsSlice =  createSlice({
    name: "productsSlice",
    initialState: [],
    reducers: { //autogenerate fns
        Append_Product: (state, action) => {
            console.log(action.payload);
            state.push(action.payload);
        },
        Get_Products: (state, action) => {
            return action.payload;
        },
    },
    extraReducers:(builder)=>{ //custom fns
        builder.addCase(FetchProducts.fulfilled,(state,action)=>{
            //logic here
            return action.payload;
        })
        // builder.addCase(FetchProducts.pending,(state,action)=>{
        //     //logic here
            
        // })
        // builder.addCase(FetchProducts.rejected,(state,action)=>{
        //     //logic here
           
        // })
    },
        // FetchProducts: createAsyncThunk({
        //     name: "productsSlice/FetchProducts",
        //     asyncFn: async () => {
        //         const response = await fetch("https://fakestoreapi.com/products");
        //         const data = await response.json();
        //         console.log(data);
        //         return data;
        //     },
        // }),
    
});
export const { Append_Product, Get_Products } = productsSlice.actions;//,FetchProducts
export default productsSlice.reducer;

// export const getAllProducts = (products) => {
//     return {
//       type: Get_Products,
//       payload: products,
//     };
//   };
// export const FetchProducts = () => {
//     return async (dispatch) => {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const data = await response.json();
//         console.log(data);
//         // dispatch({type:Get_Products,payload:data});//=
//         dispatch(getAllProducts(data)); //important
//       } catch (error) {
//         // Handle error
//       }
//     };
//   };