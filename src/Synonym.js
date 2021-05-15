import React from "react";
export default function Synonym (props){
    if (props.synonyms){
        return (
            <ul className="Synonyms">
            {props.synonyms.map(function(synonym, index){

                return  <li className="lista" key={index}>
                        {synonym} 
                    </li>;
            })}
                </ul>
        );


           
    }else{
        return null;
    }
}