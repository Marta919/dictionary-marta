import React from "react";
export default function Photos(props){
    if (props.photos){
        return( <div className="row">
            {props.photos.map(function(photo, index) {

            return (

            <div className="col-4" key={index} ><a href={photo.src.original} rel="noreferrer" target="_blank"><img className="img-fluid" src={photo.src.landscape} alt="che" width="300" height="200" />
            </a>
             </div>
            );

        })}
        </div>
        );
    }else{
        return null;
    }
}