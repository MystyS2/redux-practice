import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@nextui-org/react";
import Bgm from './Bgm';

const Box = () => {
  const dispatch = useDispatch();
  let isPlay = useSelector((state) => state.isPlay);

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 1 } });
    if(!isPlay){
      dispatch({ type: "PLAY" });        
    }
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 1 } });
    if(!isPlay){
      dispatch({ type: "PLAY" });
    }
  };

  const clear = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <div className="flex gap-6 justify-center">
      <Bgm />
      <Button color="primary" onClick={decrease} className="confetti-button w-40">Decrease</Button>
      <Button color="secondary" variant="ghost" onClick={clear}>초기화</Button>
      <Button color="danger" onClick={increase} className="confetti-button w-40">Increase</Button>
    </div>
  );
};

export default Box;
