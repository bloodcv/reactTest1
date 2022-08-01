import { promise_one } from "@/http/api";
import { createAsyncThunk } from "@reduxjs/toolkit";


// 异步action
export const getAsyncInfo = createAsyncThunk("getAsyncInfo", async (param: number, thunk) => {
  try {
    const data = await promise_one(param);
    return data;
  } catch (error) {
    console.log('error', error)
    return thunk.rejectWithValue(error)
    // throw error
  }
})