import "./Player.css";
import { useState } from "react";
import { BiPlay, BiPause } from "react-icons/bi";
import { IoIosSkipForward, IoIosSkipBackward } from "react-icons/io";
import { AiOutlineHeart, AiOutlineFullscreen } from "react-icons/ai";
import { MdDevices } from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import { ImVolumeMedium } from "react-icons/im";

const Player = (props) => {
  const [play, setPlay] = useState(false);
  const handlePlay = () => {
    let audio = document.getElementById("preview");
    setPlay(!play);
    if (play) {
      audio.play();
    } else audio.pause();
  };
  return (
    <div className="player__wrap">
      <div className="song-info">
        {props.song.title && (
          <>
            <img src={props.song?.cover} className="playing" alt="cover" />
            <div className="title-artist">
              <div className="title">{props.song?.title}</div>
              <div className="artist">{props.song?.artist}</div>
            </div>
            <AiOutlineHeart className="player__icon" />
            <MdDevices className="player__icon" />
          </>
        )}
      </div>
      <div className="central-console">
        <IoIosSkipBackward />
        {play ? (
          <BiPlay className="play" onClick={() => handlePlay()} />
        ) : (
          <BiPause className="play" onClick={() => handlePlay()} />
        )}
        <audio src={props.song?.demo} id="preview"></audio>
        <IoIosSkipForward />
      </div>
      <div className="volume-console">
        <CgPlayList />
        <AiOutlineFullscreen />
        <ImVolumeMedium />
        <div className="volume-bar"></div>
      </div>
    </div>
  );
};

export default Player;
