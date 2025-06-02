import './App.css';
import React, {useState} from 'react';
import LoginPage from './pages/LoginPage';
import MainMenu from './pages/MainMenu';
import BoxInfo from './pages/BoxInfo';
import BoxOpen from './pages/BoxOpen';
import InventoryPage from './pages/InventoryPage';
import { Route, Router } from 'wouter';



function App() {

  const [userInput, setUserInput] = useState('');

  return (
    <Router>
    <Route path="/main"component={() => <MainMenu userInput={userInput}/>}/>
    <Route path="/"component={() => <LoginPage setUserInput={setUserInput}/>} />
    

    </Router>
  );
}

export default App;
