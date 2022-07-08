import { useState, useEffect } from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import MainComponent from "./components/Main";
import Login from './pages/Login';
import UPage from './pages/UPage';
import Nav from './components/Nav';



import './App.css';

function App() {
  const [user, setUser] = useState(null);
 
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }
    , []);
  return (
    <BrowserRouter>
      <Nav user={user} />
      <MainComponent user={user} />
     
    </BrowserRouter>
  );
  

  console.log(user);

 
    return (
      <div className="app">
      <BrowserRouter>
        
          <Nav user={user} />
          {/* {user? <UPage user={user} /> : <Login/>} */}
      
          <Link to={"/home"} />
          
          <MainComponent  />
       
      </BrowserRouter>
      </div>
    );
  
}
export default App;