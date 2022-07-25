import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  count: number;
  text?: string;
}

const initialState: InitialState = {
  count: 0,
  text: '我是文字'
}

interface PromiseNum {
  number: number
}

const promise_one: (param: number) => Promise<PromiseNum> = (param) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({
        number: param
      })
    }, 2000)
  })
}


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

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    add: (state) => {
      state.count += 1;
    },
    minus: (state) => {
      state.count -= 1;
    },
    change: (state, action) => {
      console.log('action', action)
      state.text = action.payload;
    },
    back: (state) => {
      state.text = "我是文字";
    },
  },
  extraReducers: (builder) => {
     // 进行请求阶段的一些操作
    builder.addCase(getAsyncInfo.pending, () => {
      console.log('进行中')
    })
    builder.addCase(getAsyncInfo.fulfilled, (state, action) => {
      console.log('action.payload', action.payload); // { number: xx }
      console.log('state.text', state.text); // 我是文字
      state.count += action.payload.number;
      console.log('成功')
    })
    builder.addCase(getAsyncInfo.rejected, (state, err) => {
      // 用 rejectWithValue 把错误信息注入err
      console.log('失败参数', state, err)
    })
  }
})

export const { add, minus, change, back } = channelSlice.actions;

export default channelSlice.reducer;