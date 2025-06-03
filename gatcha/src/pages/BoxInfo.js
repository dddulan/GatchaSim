import React, { useState } from 'react'
import cards from '../components/PopInfo';
import {useParams,useLocation} from 'wouter';
import Button from '../components/Button';






export default function BoxInfo(){


  const handleClick=()=>{
    /*get id of box/card  */
    /*go to id of box  */
    navigate(`/boxopen/${id}`)//goes to the open box page


}


     const {id} = useParams(); //gives the current card id from URL
     const[_, navigate]=useLocation(); //use navigate to go to new page
    /*finds the id of the card and reders the corresponding  */
    const card=cards.find((c) => c.id ===parseInt(id));
if (!card) return <p>Card not found</p>;
    return (<div>
      <h2>{card.title}</h2>
          {/*image of the box  */}

    <img src={card.boximage} alt={card.title} />
    
    <p>{card.description}</p>

    <p>{card.price}</p>
      <Button onClick={handleClick}>Pick one to shake</Button>
    {/*image of all  */}
    <img src={card.allimage} alt={card.title} />
    </div>
    )
}