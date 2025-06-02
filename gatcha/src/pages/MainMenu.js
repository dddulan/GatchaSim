import React, {useState,} from 'react'
import Navbar from '../components/Navbar'
import { Card } from '../components/Card'
export default function MainMenu({userInput}){
    return (
        <div>
            <Navbar />
            <p>hello {userInput}</p>
            <Card />
            <Card />
        </div>
        
    )
}