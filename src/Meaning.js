import React from "react";
export default function Meaning (props) {
    console.log(props.meaning);
return (
    <div className="Meanings">
   <h5>{props.meaning.partOfSpeech}</h5> 
   {props.meaning.definitions.map(function(definition, index){
   return (
    <div key={index}>
<p>
   <b> {definition.definition} </b>
    <br />
   <em> "- {definition.example}" </em>
</p>

    </div>   
   
   
);

}) }</div> );}