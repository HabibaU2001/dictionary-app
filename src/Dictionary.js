import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let imageApikey = "1b2a975fc904b87a04835t202o34a006";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApikey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
  }

  function HandleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          className="Search-input"
          type="search"
          onChange={HandleKeywordChange}
          placeholder="Search for a word"
        />
        <button className="Search-btn"> 🔍 </button>
      </form>
      <div className="hint">E.g. sunset, ambition, yoga, conflict</div>

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
