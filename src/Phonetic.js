import React from "react";
import "./Results.css";

export default function Phonetic(props) {
  return <div className="Phonetics">{props.phonetic.text}</div>;
}
