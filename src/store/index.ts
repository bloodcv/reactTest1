import { configureStore } from '@reduxjs/toolkit';
import channelSlice from './reducers/channel';


const store = configureStore({
  reducer: {
    channel: channelSlice
  }
})

export default store;