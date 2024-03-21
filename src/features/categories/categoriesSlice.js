import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URL } from "../../utils/constatns";


export const getCotigories = createAsyncThunk('categories/getCategories', async (_, thunkAPI) => {
  try{
    const res = await axios(`${BASE_URL}/categories`);
    return res.data;
  } catch (err){
    console.log(err);
    return thunkAPI.rejectWithValue(err);
  }
}
)

categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list:[],
  }
})