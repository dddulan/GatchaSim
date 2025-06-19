import React from 'react';
import styles from './SideBar.css';
import cards from './PopInfo.js';
export const SideBar =()=> {
    const allSeries = cards.map(card=> card.title);
    const uniqueSeries = Array.from(new Set(allSeries));
    return (

        <div className={styles.sidebar}>
            <ul>
                <li>Category</li>
                <ul>
                    {uniqueSeries.map((series,index)=> (
                        <li key={index}>{series}</li>
                    ))}
                </ul>
                
                

            </ul>

        </div>
    )
}