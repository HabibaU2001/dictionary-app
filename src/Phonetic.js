import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  let playAudio = () => {
    if (props.phonetic.audio) {
      const audio = new Audio(props.phonetic.audio);
      audio.play();
    }
  };

  let audioContent;
  if (props.phonetic.audio) {
    audioContent = (
      <button onClick={playAudio}>
        <FontAwesomeIcon icon={faVolumeHigh} />
      </button>
    );
  } else {
    audioContent = <span>No audio available</span>;
  }

  return (
    <div className="Phonetics">
      {audioContent}
      <br />
      {props.phonetic.text}
    </div>
  );
}
