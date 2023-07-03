import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import { useState } from "react"

export default function Rating(){
    const { id } = useParams()
    const rating = data.find((rating) => rating.id == id)
    const [ currentIndex, setCurrentIndex] = useState(0)

    const currentRating  = rating.rating


    console.log(currentRating);

    function setStars(ratings, isRatings){
        
    }

    return(
        <div className="informations">
           
        </div>
    )
}