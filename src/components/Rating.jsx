import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import { useState } from "react"

export default function Rating(){
    const { id } = useParams()
    const rating = data.find((rating) => rating.id == id)
    const [ currentIndex, setCurrentIndex] = useState(0)

    return(
        <div className="informations">
           
        </div>
    )
}