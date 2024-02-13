import ReactPlayer from "react-player";
import { useRef } from "react";

const VIDEO_PATH = "https://www.youtube.com/shorts/0y_L8aIUD_U";
export default function Video() {
  const playerRef = useRef(null);

  return (
    <>
      <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
    </>
  );
}
