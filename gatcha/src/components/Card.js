import React from 'react'
import { Link } from 'wouter';
import './Card.css';
export const Card = ({card}) =>{
   if (!card) return null;

    return (
    <div className="card-grid">
        <div className="card-container">
                <Link href={`/card/${card.id}`} className="card-link">

                    <img src={card.image} alt={card.title} className="card-img" />

            <h1  className="card-title">{card.title}</h1>
            <p className="card-description">{card.description}</p>
            <p className="card-price">{card.price}</p>
            </Link>
        </div>
    </div>
    )
};