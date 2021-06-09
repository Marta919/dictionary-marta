import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
export default function Dictionary () {
    let [keyword, setKeyword] = useState ("");
    let [results, setResults] = useState (null);
    let [photos, setPhotos] =useState (null);
    function handleDictionaryResponse(response){

        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
setPhotos(response.data.photos);
    }
    function search(event) {
event.preventDefault();
       

let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(handleDictionaryResponse);
let pexelsApiKey= "563492ad6f9170000100000137ae1001ea574164aea6d07bac89cde8";
let pexelsApiUrl=  `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
axios.get(pexelsApiUrl, {headers : headers}).then(handlePexelsResponse);
    }

    function handleKeywordChange (event){
        setKeyword(event.target.value);

    }
    return ( 
<div className="dictionary">
    <br />
    <form onSubmit={search}>
        <input type="search" onChange= {handleKeywordChange} />
       <input type="submit" value="Search"/>
   </form> 
    <br />
    <Results results={results}/>
    <Photos photos={photos}/>

</div>


    );
}