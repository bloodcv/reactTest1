import { getAsyncInfo } from "@/store/actions/channel";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { add, back, change, minus } from "@/store/reducers/channel";
import { RootState } from "@/type/store";
import { Button } from "antd";
import React, { useEffect, useRef } from "react";
import { shallowEqual } from "react-redux";
import './ReduxjsTookitT.less';

const ReduxjsTookitT: React.FC = () => {

  console.log('FC 渲染了')

  const { count, text } = useAppSelector((state: RootState) => ({ ...state.channel }), shallowEqual);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAsyncInfo(6));
  }, [dispatch]);

  const btn = useRef(null);

  console.log('btn-fc', btn);

  useEffect(() => {
    console.log('btn-ref-in-efect', btn)
  }, [])

  return (
    <>
      <div className="wrap">
        <h1>121232</h1>
        <div>我是  ReduxjsTookitT</div>
        <h3>我是 count: { count }</h3>
        <h3>我是 text: { text }</h3>
        <Button type="primary" onClick={() => {
          dispatch(add())
        }}>
          加1
        </Button>
        <Button type="primary" onClick={() => {
          dispatch(minus())
        }}>
          减1
        </Button>
        <Button type="primary" onClick={() => {
          dispatch(getAsyncInfo(12))
        }}>
          异步加10
        </Button>
        <Button type="primary" onClick={() => {
          dispatch(change('123'))
        }}>
          改变文字
        </Button>
        <Button type="primary" onClick={() => {
          dispatch(back())
        }}>
          改回去
        </Button>
        <Button type="primary" ref={ btn }>
          useRef
        </Button>
      </div>
    </>
  )
}

export default ReduxjsTookitT;