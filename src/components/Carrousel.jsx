import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";

export default function Carrousel(){
    const { id } = useParams()
    const logement = data.find((logement) => logement.id == id)
    return(
    <div>
        {logement.pictures.map((item, index) => (
            <img key={index} src={item} alt="oui" />
        ))}
    </div>
    )
}
