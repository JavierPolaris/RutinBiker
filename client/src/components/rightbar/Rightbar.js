import "./rightbar.css";
import { useState, useEffect } from "react";
import Online from "../online/Online";
import Target from "../targetRightbar/targetRightbar";

export default function Rightbar({ profile }) {
 const Users = localStorage.getItem("user");
  const HomeRightbar = () => {
   
  
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Mihai</b> y <b>otros 3 amigos</b> cumplen años hoy.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
  
   
   
    return (
      <>
        
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
         <Target />
          
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}