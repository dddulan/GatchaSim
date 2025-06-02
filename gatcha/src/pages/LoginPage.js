import React, {useState} from 'react'
import MainMenu from './MainMenu';
import { useLocation } from 'wouter';
import "./LoginPage.css";

export default function LoginPage({setUserInput}){
    const [inputValue,setInputValue] = useState('');
    const [, navigate] = useLocation();


    const handleClick=()=>{
        setUserInput(inputValue);
        navigate('/main')
    }

    const handleInput=(e)=>{
        setInputValue(e.target.value);
    }


    return(
        <div className="login-container">
            <label htmlFor="username-input" className="login-label">
            Enter your name
            </label>
            <input
                    id="username-input"
                    type="text"
                    value={inputValue}
                    onChange={handleInput}
                    placeholder="Your name"
                    className="login-input"
                    />
                
            <button onClick={handleClick} className="login-button">Continue</button>
    </div>
    );
}