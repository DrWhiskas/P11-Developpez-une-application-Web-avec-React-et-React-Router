import React from "react";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Dropdown from "../components/Dropdown";
import Informations from "../components/Informations";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import { useParams } from "react-router-dom";

import data from '../data/data.json';

import ratingTag from '../style/page/rating-tag.css'

export default function Logements() {
  const { id } = useParams();
  const newdata = data.find((newdata) => newdata.id === id);

  console.log(newdata.equipments);
  
  return (
    <>
      <Header />
      <Carrousel />
      <Informations />
      <div className="rating-tag">
        <Tag />
        <Rating />
      </div>
      
      <Dropdown titles='Description' descriptions={newdata.description} />
      <Dropdown titles='Equippements' descriptions={
        <>
          <ul>
            {newdata.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </>
      } />
      <Footer />      
    </>
  );
}