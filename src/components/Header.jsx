import React from "react";
import UserAvatar from "../components/UserAvatar";
import SearchBar from "../components/SearchBar";
import { useContext } from "react";
import UserContext from "../context";

const Header = () => {
  const {profilePicture,userName} = useContext(UserContext);

  return (
    <div className="top">
      <div className="searchBar-section">
        <SearchBar />
      </div>
      <div className="avatar-section">
        <UserAvatar username={userName} picture={profilePicture}/>
      </div>
    </div>
  );
};

export default Header;
