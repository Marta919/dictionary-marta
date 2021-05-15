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
  <Synonyms synonym={synonym} />
  if (definition.synonyms) {
      return ( 
      <b>Synonym:</b> {definition.synonyms});
  }else{
      return null;
  }
  }


</p>

    </div>   
   
   
);

}) }</div> );}