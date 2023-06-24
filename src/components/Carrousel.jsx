import React from "react";

export default function Carrousel ({images}){
    return(
        <div>
            {images.map((image, index) =>{
                <img key={index} src={image} />
            })}
        </div>
    )
}