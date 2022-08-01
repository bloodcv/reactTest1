import store from "@/store";

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

interface InitialChannelState {
  count: number;
  text?: string;
}

interface ChannelErrorType {
  msg: string;
}

