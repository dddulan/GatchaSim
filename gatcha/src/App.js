import './App.css';
import React, {useState} from 'react';
import LoginPage from './pages/LoginPage';
import MainMenu from './pages/MainMenu';
import BoxInfo from './pages/BoxInfo';
import BoxOpen from './pages/BoxOpen';
import BoxReveal from './pages/BoxReveal';
//import InventoryPage from './pages/InventoryPage';
import { Route, Router } from 'wouter';
import NavBar from './components/Navbar';


//<Route path="/boxopen/:id"component={BoxOpen}/>
function App() {

  const [userInput, setUserInput] = useState('');

  return (
    <Router>
    
      <NavBar userInput={userInput} />
    
  
  
    <Route path ="/card/:id">
    <BoxInfo />
    </Route>
    
    <Route path ="/boxopen/:id">
    <BoxOpen />
    </Route>

    <Route path ="/boxreveal/:brand/:series/:id">
    <BoxReveal />
    </Route>

    <Route path="/main"component={() => <MainMenu userInput={userInput}/>}/>
    <Route path="/"component={() => <LoginPage setUserInput={setUserInput}/>} />
    

    </Router>
  );
}

export default App;
