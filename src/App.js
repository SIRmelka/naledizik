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
import BottomBar from "./components/BottomBar";
import Loader from "./components/Loader";
import Artist from "./pages/Artist";

function App() {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [searchingTerm, setSearchingTerm] = useState("a");
  const [playingPlaylist, setPlayingPlaylist] = useState(
    "37i9dQZF1DWZg863fGtALu"
  );
  const [selectedArtist,setSelectedArtist] = useState('')
  const [selectedAlbum,setSelectedAlbum] = useState('')

  const [curentlyPlaying, setCurentlyPlaying] = useState("");
  const [play, setPlay] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPlay(true);
  }, [curentlyPlaying]);

  const getData = new SpotifyWebApi();
  console.log(loading);

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
        loading,
        setLoading,
        selectedAlbum,setSelectedAlbum,
        selectedArtist,setSelectedArtist
      }}
    >
      <div className="home">
        <Loader show={loading}/>
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
                <Route path="/artist" element={<Artist/>} />
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
                trackArtistColor: "#333",
                trackNameColor: "#000",
              }}
            />
          </div>
          <div className="bottom-bar">
            <BottomBar />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
