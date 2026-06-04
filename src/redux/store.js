import { configureStore } from "@reduxjs/toolkit";
import { ProdutSlice } from "./Products.slice";

import { CartSlice } from "./CartSlice";



export const store = configureStore ({
  reducer : {
    [ProdutSlice.name]: ProdutSlice.reducer,
    [CartSlice.name]: CartSlice.reducer,
  }
})

