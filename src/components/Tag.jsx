import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import { useState } from "react"

export default function Tag(){
    const { id } = useParams()
    const tag = data.find((tag) => tag.id == id)
    const [ currentIndex, setCurrentIndex] = useState(0)


    return(
        <div className="tags">
           
        </div>
    )
}