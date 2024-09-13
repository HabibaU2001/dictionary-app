import React from "react";
import "./Results.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong> {definition.definition}
              <br />
              {definition.example && definition.example.length > 0 && (
                <em className="Example">
                  Example:{" "}
                  {Array.isArray(definition.example)
                    ? definition.example.join(", ")
                    : definition.example}
                </em>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
}
