import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@nextui-org/react";
import Bgm from './Bgm';

const Box = () => {
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 1 } });
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 1 } });
  };

  const clear = () => {
    dispatch({ type: "CLEAR" });
  };

  const isPlayVideo = () => {
    dispatch({ type: "PLAY" });
  };

  return (
    <div className="flex gap-6 justify-center">
      <Button
        radius="full"
        onClick={isPlayVideo}
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      >
        시작
      </Button>

      <Bgm />
      
      <Button
        color="primary"
        onClick={decrease}
        className="confetti-button w-40"
      >
        Decrease
      </Button>
      <Button color="secondary" variant="ghost" onClick={clear}>
        초기화
      </Button>
      <Button
        color="danger"
        onClick={increase}
        className="confetti-button w-40"
      >
        Increase
      </Button>
    </div>
  );
};

export default Box;
