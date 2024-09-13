import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  const maxDefinitions = 3;

  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word} </h2>

        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index} className="phonetic-item">
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}

        {props.results.meanings
          .slice(0, maxDefinitions)
          .map(function (meaning, index) {
            return (
              <section key={index} className="meaning-item">
                <Meaning meaning={meaning} />
                {meaning.synonyms && meaning.synonyms.length > 0 && (
                  <p className="synonyms">
                    Synonyms: {meaning.synonyms.join(", ")}
                  </p>
                )}
              </section>
            );
          })}
      </div>
    );
  } else {
    return null;
  }
}
