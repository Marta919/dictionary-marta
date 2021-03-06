import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
export default function Result(props){
    console.log(props.results);
    if (props.results){
   return <div className="Results"> 
   <h4><solid>{props.results.word}</solid> </h4>
   <hr />
   {props.results.phonetics.map(function(phonetic, index){
       return (
    <div key={index}>
        <Phonetics phonetic={phonetic} />
        </div>

       );
   })}
   {props.results.meanings.map(function(meaning, index){
    return <div key={index}>
        
   <Meaning meaning={meaning}/>
   </div>
   })}
   
    </div>;
} else {
    return null;
}
}