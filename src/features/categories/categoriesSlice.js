import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URL } from "../../utils/constatns";


export const getCatigories = createAsyncThunk('categories/getCategories', async (_, thunkAPI) => {
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
    isLoading: false
  },
  extraReducers: (builder) => {
    builder.addCase(getCatigories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCatigories.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(getCatigories.rejected, (state) => {
      state.isLoading = false;
      console.log('Error!');
    });
  },
})

export default categoriesSlice.reducer;