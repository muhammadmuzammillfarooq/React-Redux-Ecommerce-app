import {createSlice} from "@reduxjs/toolkit";

export  const ProdutSlice = createSlice({
    name:'productSlice',
    initialState: {
        product:[]
    },
    reducers :{
        addproducts(state,action){
            state.products = action.payload
        }
    }

})

export  const {addproducts} = ProdutSlice.actions;

export default ProdutSlice.reducer;