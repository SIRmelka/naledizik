import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.scss";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Albums from "./pages/Albums";
import Playlists from "./pages/Playlists";
import UserContext from "./context";

function App() {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const getData = new SpotifyWebApi();

  getData.setAccessToken(localStorage.getItem("token"));

  getData.getMe().then((data) => {
    setUserId(data.id);
    setProfilePicture(data.images[0].url);
    setUserName(data.display_name);
  });

  return (

    <UserContext.Provider
    value={{
      getData,
      userId,
      userName,
      profilePicture,
    }}
    >

    <div className="home">
      <div className="sidebar-section">
        <SideBar />
      </div>

      <div className="content-section">
        <Header />

        <div className="middle">
        
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/login" element={<Login />} />
            </Routes> 
        </div>
      </div>
    </div>
    </UserContext.Provider>
  );
}

export default App;
