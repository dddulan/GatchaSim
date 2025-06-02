import React, {useState,} from 'react'
import Navbar from '../components/Navbar'
import { Card } from '../components/Card'
import cards from '../components/PopInfo';


export default function MainMenu({userInput}){
    return (
        
  <div className="main-menu">
      <h2 style={{textalign:'center'}}>Blind Boxes</h2>
      
      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
    
        
        
    )
}