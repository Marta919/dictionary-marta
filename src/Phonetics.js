import React from "react";
export default function Phonetics(props){
return (
<div className="Phonetics">
<a href={props.phonetic.audio} target="_blank" rel="noreferrer">
   <span className="altoparlante"> 🔊 </span> 
    </a> 
    {props.phonetic.text}   
</div>
);
}