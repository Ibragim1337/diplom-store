import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URL } from "../../utils/constatns";


// export const getCatigories = createAsyncThunk('categories/getCategories', async (_, thunkAPI) => {
//   try{
//     const res = await axios(`${BASE_URL}/categories`);
//     return res.data;
//   } catch (err){
//     console.log(err);
//     return thunkAPI.rejectWithValue(err);
//   }
// }
// )

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currnetUser:[],
    cart:[],
    isLoading: false
  },
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload.id );

      if(found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id ? {...item, quantity: payload.quantity || item.quantity + 1} : item;
        })
      } else newCart.push({ ...payload, quantity: 1});

      state.cart = newCart;
     },
     addItemToFavorites: (state, { payload }) => {
      const found = state.favorites.find(({ id }) => id === payload.id);
    
      if (!found) {
        state.favorites.push(payload);
      }
    },
     
  },
})

export const { addItemToCart, addItemToFavorites } = userSlice.actions;

export default userSlice.reducer;