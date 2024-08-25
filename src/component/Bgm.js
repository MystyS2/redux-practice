import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

const Bgm = () => {
  let bgmIndex = useSelector((state) => state.bgmIndex);
  let isPlay = useSelector((state) => state.isPlay);

  return (
    <div className="hidden">
      <ReactPlayer
        className="player"
        url={"https://www.youtube.com/embed/Kus75rHg930"}
        width="500px"
        playing={isPlay}
        muted={false}
        controls={false}
      />
    </div>
  );
};

export default Bgm;
