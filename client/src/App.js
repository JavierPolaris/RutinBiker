import { useState, useEffect } from 'react';

import Login from './components/Login';
import Home from './components/Home';
import Nav from './components/Nav';
import firebase from './service/firebase';

import './App.css';

function App() {
  const [user, setUser] = useState(null);

// UseEffect: escucha si hay cambios en la selección del correo del usuario en gmail.
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, []) 

  console.log(user);

  return (
    <div className="app">
      <Nav user={user} />
      {user? <Home user={user} /> : <Login/>}
    </div>
  );
}

export default App;