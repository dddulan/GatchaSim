import React from 'react'
import { Link } from 'wouter';
import './Card.css';
export const Card = () =>{
    return (
    
    <div className="card-container">
        <Link href="/" className="card-link">
        <img src="/images/hironoEcho1.png" alt="Card Image" className="card-img" width="100" height="150"/>
        <h1 className="card-title">Hirono</h1>
        <p className="card-description">Hirono Echo Series Figures</p>
        <p className="card-price">$18.99</p>
        </Link>
    </div>)
};