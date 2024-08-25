import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";

const Bgm = () => {
  const dispatch = useDispatch();
  let count = useSelector((state) => state.count);
  let bgmIndex = useSelector((state) => state.bgmIndex);
  let isPlay = useSelector((state) => state.isPlay);

  const bgmList = [
    "W9PlAFQKf0A", // me me she
    "tGVjM8b3Xwo", // I'm fine
    "SIuF37EWaLU", // tokyo flash
    "R_RAWjqdgTs", // supadopa
    "L13gCEZJVRU", // henceforth
    "RzRHcN9HLYc", // VS. Yinu
    "3GzRDW3hZ1k", // hao
    "8tQiWHXSGN0", // fatal
    "u3b_HOyVtM4", // VS. Sayu
    "LqkAZcpMTbw", // 회회기담
    "WNcNOaUWRaU", // 나는 최강
    "19y8YTbvri8", // mesmerizer
  ];
  // count에 따른 bgmIndex 값 설정
  useEffect(() => {
    let newIndex = -1; // 기본값

    if (count <= 0) {
      newIndex = 0;
    } else if (count >= 100) {
      newIndex = 11;
    } else if (count >= 90) {
      newIndex = 10;
    } else if (count >= 80) {
      newIndex = 9;
    } else if (count >= 70) {
      newIndex = 8;
    } else if (count >= 60) {
      newIndex = 7;
    } else if (count >= 50) {
      newIndex = 6;
    } else if (count >= 40) {
      newIndex = 5;
    } else if (count >= 30) {
      newIndex = 4;
    } else if (count >= 20) {
      newIndex = 3;
    } else if (count >= 10) {
      newIndex = 2;
    } else if (count > 0) {
      newIndex = 1;
    }

    // bgmIndex가 바뀌어야 하는 경우에만 dispatch 호출
    if (newIndex !== bgmIndex) {
      dispatch({ type: "CHANGEIDX", payload: { idx: newIndex } });
    }
  }, [count, bgmIndex, dispatch]); // count 또는 bgmIndex가 변경될 때만 실행

  return (
    <div className="hidden">
      <ReactPlayer
        className="player"
        url={`https://www.youtube.com/embed/${bgmList[bgmIndex]}`}
        playing={isPlay}
        muted={false}
        controls={false}
        volume={0.3}
      />
    </div>
  );
};

export default Bgm;
