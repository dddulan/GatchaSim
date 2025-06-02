import React from 'react'
import cards from '../components/PopInfo';
import {useParams} from 'wouter';

export default function BoxInfo(){

     const {id} = useParams();
    const card=cards.find((c) => c.id ===parseInt(id));
if (!card) return <p>Card not found</p>;
    return (<div>
      <h2>{card.title}</h2>
    <img src={card.boximage} alt={card.title} />
    
    
    <p>{card.description}</p>
    <p>{card.price}</p>
    <img src={card.allimage} alt={card.title} />
    </div>
    )
}