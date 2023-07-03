import React from "react";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel"
import Dropdown from "../components/Dropdown";
import Informations from "../components/Informations";
import Footer from "../components/Footer";
import Rating from "../components/Rating";

export default function Logements(){
    return(
        <>
        <Header />
        <Carrousel />
        <Informations />
        <Rating />
        <Dropdown titles='Description' />
        <Dropdown titles='Equippements' />
        <Footer />      
        </>
    )
}