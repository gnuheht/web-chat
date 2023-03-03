import { useState } from 'react';
import './App.css';
import Chat from './components/ChatRoom';
import Login from './components/Login';

function App() {
  const [showChat,setShowChat] = useState(false);
  const [name,setName] = useState('');
  const getName = (name) => {
    setName(name);
    setShowChat(true);
  }
  return (
    <div className='App'>
      <h1>{name}</h1>
      {!showChat && <Login callback={getName}/>}
      {showChat && <Chat name={name}/>}    
    </div>
    
  );
}

export default App;
