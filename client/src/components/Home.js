import React from 'react';
import { auth } from '../service/firebase'
import '../App.css';

const Home = ({ user }) => {
  return (
    <div className="home">
      console.log(user.email)
      <h1>Hello, <span></span>{user.displayName}</h1>
      <img src={user.photoURL} alt="" />

      // Al clickear se desloguea con (auth.signOut())
      <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
    </div>
  )
}

export default Home; 