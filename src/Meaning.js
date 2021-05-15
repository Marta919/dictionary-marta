import React from "react";
import Synonym from "./Synonym";
export default function Meaning (props) {
    console.log(props.meaning);
return (
    <div className="Meanings">
   <h5>{props.meaning.partOfSpeech}</h5> 
   {props.meaning.definitions.map(function(definition, index){
   return (
    <div key={index}>
<p>
   <b> Definition: </b> {definition.definition} 
    <br />
  <b>  Example: </b> <em>"{definition.example}" </em>
  <br />
  <Synonym synonyms={definition.synonyms} />
 


</p>

    </div>   
   
   
);

}) }</div> );}