import React, { useState } from 'react'
import cards from '../components/PopInfo';
import {useParams,useLocation} from 'wouter';
import Button from '../components/Button';
import styles from './BoxInfo.module.css';





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
    return (
    <div className={styles.container}>
        <div className={styles.topRow} >

      <div className={styles.imageSection}>

              {/*image of the box  */}

        <img src={card.boximage} alt={card.title} />
      </div>
      <div className={styles.infoSection}>
      <h2 className={styles.title}>{card.title}</h2>

        <p className={styles.description}>{card.description}</p>

        <p className={styles.price}>{card.price}</p>
        
      <Button className={styles.button} onClick={handleClick}>Pick one to shake</Button>
      </div>
      </div>
      <div className={styles.fullImageSection}>
    {/*image of all  */}
    <img
  className={styles.fullImage}
  src={card.allimage}
  alt={`${card.title} full lineup`}
/>   
 </div>
</div>

    )
}