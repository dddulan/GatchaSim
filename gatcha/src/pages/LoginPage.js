import React, {useState} from 'react'
import MainMenu from './MainMenu';
import { useLocation } from 'wouter';

export default function LoginPage({setUserInput}){
    const [inputValue,setInputValue] = useState('');
    const [, navigate] = useLocation();


    const handleClick=()=>{
        setUserInput(inputValue);
        navigate('/main')
    }
/*
    
*/
   
    function nextPage(){
        navigate('/main')
    }

    const handleInput=(e)=>{
        setInputValue(e.target.value);
    }


    return(
        <div>
    <input type="text"
            value={inputValue}
            onChange={handleInput}
            />
        
    <button onClick={handleClick}>Continue</button>
    </div>
    );
}