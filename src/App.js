import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
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
import SpotifyWebPlayer from "react-spotify-web-playback/lib";
import PlayingPlaylist from "./pages/PlayingPlaylist";

function App() {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [searchingTerm, setSearchingTerm] = useState("a");
  const [playingPlaylist, setPlayingPlaylist] = useState(
    "37i9dQZF1DWZg863fGtALu"
  );
  const [curentlyPlaying, setCurentlyPlaying] = useState("");
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true);
  }, [curentlyPlaying]);

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
        searchingTerm,
        setSearchingTerm,
        playingPlaylist,
        setPlayingPlaylist,
        curentlyPlaying,
        setCurentlyPlaying,
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
              <Route path="/playlist" element={<PlayingPlaylist />} />
            </Routes>
          </div>
          <div className="player">
            <SpotifyWebPlayer
              uris={[curentlyPlaying]}
              play={play}
              autoPlay={true}
              callback={(event) => !event.isPlaying && setPlay(false)}
              token={localStorage.getItem("token")}
              styles={{
                activeColor: "#1B75BB",
                color: "#333",
                loaderColor: "#1B75BB",
                sliderColor: "#1B75BB",
                trackArtistColor: "#ccc",
                trackNameColor: "#fff",
              }}
            />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
