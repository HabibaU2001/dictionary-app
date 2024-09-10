import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning text-center">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        console.log(definition.synonym);
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong> {definition.definition}
            </p>
            {definition.example && (
              <p>
                <strong>Example:</strong> <em>{definition.example}</em>
              </p>
            )}
            {definition.synonyms && definition.synonyms.length > 0 && (
              <div>
                <strong>Synonyms:</strong>
                <Synonyms synonyms={definition.synonyms} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
