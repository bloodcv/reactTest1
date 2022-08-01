import { InitialChannelState } from "@/type/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAsyncInfo } from "../actions/channel";

const initialState: InitialChannelState = {
  count: 0,
  text: '我是文字',
}

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
    change: (state, action: PayloadAction<string>) => {
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
      state.text = '成功';
      console.log('成功')
    })
    builder.addCase(getAsyncInfo.rejected, (state, action) => {
      // 用 rejectWithValue 把错误信息注入err
      console.log('失败参数', state, action)
      // action.payload 是 unknown 类型 只能类型断言或者typeof判断实际值的类型
      state.text = (action.payload as PromiseErr).msg
    })
  }
})

export const { add, minus, change, back } = channelSlice.actions;

export default channelSlice.reducer;