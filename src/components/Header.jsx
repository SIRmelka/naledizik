import React from "react";
import UserAvatar from "../components/UserAvatar";
import SearchBar from "../components/SearchBar";
import { useContext } from "react";
import UserContext from "../context";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";


const Header = () => {
  const {profilePicture,userName} = useContext(UserContext);
  
  const [clickDisconectBtn,setClickDisconectBtn] = useState(false)

  function click(){
    setClickDisconectBtn(!clickDisconectBtn)
  }
  function disconnect(){
    localStorage.removeItem("connected")
    window.location.href= "/"
  }

  return (
    <div className="top">
      <div className="searchBar-section">
        <SearchBar />
      </div>
      <div className="avatar-section" onClick={click}>
        <UserAvatar username={userName} picture={profilePicture}/>
          <div className={clickDisconectBtn?"deconnexion":"hidden"} onClick={disconnect}>
            <span><p><FiLogOut className="log-out"/> log out</p></span>
          </div>
      </div>
    </div>
  );
};

export default Header;
