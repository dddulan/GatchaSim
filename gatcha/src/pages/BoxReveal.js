import React from "react";
import {useParams,Link} from 'wouter';
import cards from '../components/PopInfo'

export default function BoxReveal() {

    const {brand, series,id } = useParams();
const imagePath = `/images/${brand}/${series}/single/${id}.PNG`;

 const card=cards.find((c) => c.id ===parseInt(id));
  return (
    <div>
        <div>You got a.....</div>
    <img src={imagePath} alt={`Box ${id}`} />
        
        
    </div>
    


  )
  
}