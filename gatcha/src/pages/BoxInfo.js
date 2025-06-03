import React, { useState } from 'react'
import cards from '../components/PopInfo';
import {useParams} from 'wouter';
import Button from '../components/Button';




const handleClick=()=>{
    {/*get id of box/card  */}
    {/*go to id of box  */}


}


export default function BoxInfo(){

     const {id} = useParams();
    {/*finds the id of the card and reders the corresponding  */}
    const card=cards.find((c) => c.id ===parseInt(id));
if (!card) return <p>Card not found</p>;
    return (<div>
      <h2>{card.title}</h2>
          {/*image of the box  */}

    <img src={card.boximage} alt={card.title} />
    
    <p>{card.description}</p>

    <p>{card.price}</p>
      <Button onClick={handleClick}>Pick one to open</Button>
    {/*image of all  */}
    <img src={card.allimage} alt={card.title} />
    </div>
    )
}