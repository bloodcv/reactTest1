import { configureStore } from '@reduxjs/toolkit';
import channelSlice from './reducers/channel';


const store = configureStore({
  reducer: {
    channel: channelSlice
  }
})

// RootState作用是返回store的方法getState的类型 function
export type RootState = ReturnType<typeof store.getState> 

// AppDispatch 作用是拿到Store的dispatch方法的类型 function
export type AppDispatch = typeof store.dispatch

export default store;