import React from 'react'
import cards from '../components/PopInfo'
import { Card } from '../components/Card'
import {useParams,Link} from 'wouter';
import styles from './BoxOpen.css'


export default function BoxOpen(){

function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }


const { id } = useParams();

 const card=cards.find((c) => c.id ===parseInt(id));

  if (!card) return <p>Card not found</p>;

    return (
        <div>
            <div className="boxes-container">
                <div className="single-box">
                    {[...Array(12)].map((_, i) => {
                    const randomNum=getRandomInt(1,13);
                        return(
                            <Link key={i} href={`/boxreveal/${card.title}/${card.series}/${randomNum}`}>
                                <img src={card.singlebox}
                                alt={randomNum}/> 
                            </Link>
                        )        
                    })}
                </div>
            </div>
        </div>
    )
}