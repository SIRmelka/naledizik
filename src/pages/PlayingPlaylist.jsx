import React from "react";
// import { useEffect } from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { FiPauseCircle, FiPlayCircle } from "react-icons/fi";
import { RiHeart3Line } from "react-icons/ri";
import MiniLoader from "../components/MiniLoader";
import MusicTile from "../components/MusicTile";
import UserContext from "../context";

const timeConvert = (number) =>{

    var s = Math.floor(number / 1000) % 60;
  //minutes
    var m = Math.floor(number / 60000) % 60;
  //affichage
    var chaine = m+":"+s;
    return chaine
  
  }

const PlayingPlaylist = () => {
  const { getData, playingPlaylist,setCurentlyPlaying } = useContext(UserContext);

  const [musics, setMusics] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [loading,setLoading] = useState(true)
  const [playing,setPlaying] = useState(false)

  useEffect(() => {
    getData.getPlaylist(playingPlaylist).then((data) => {
      setMusics(data.tracks.items);
      setPlaylist(data);
      setLoading(false)
    });
  }, []);


  return (
    <>
    {
      !loading?
    <div className="playing-playlist">
      
        <div
        className="playlist-banner"
        style={{
          backgroundImage: `url(${
            playlist.images ? playlist.images[0].url : ""
          })`,
        }}>

        <div className="bottom">
            <div className="left">
            <span className="Playlist-info">
                <h1>{playlist.name}</h1>
                <p>{playlist.tracks?playlist.tracks.total:""} tracks</p>
            </span>
            </div>
            <div className="right">
            <span onClick={()=>{
              setCurentlyPlaying(playlist.uri)
              setPlaying(!playing)
                }
              }>
              {!playing?<FiPlayCircle/>:<FiPauseCircle/>}
            </span>
            <span>
                <RiHeart3Line />
            </span>
            </div>
        </div>
      </div>

      <div className="playlist-elements">
        {
        musics.map((music) => {
          return (
          
          <MusicTile  uri={music.track.uri?music.track.uri:""} key={music.track.uri} trackName={music.track.name}
          background={music.track.album.images[0].url}
          duration={timeConvert(music.track.duration_ms)}
          />
          
          );
        })}
      </div>
    </div>:<MiniLoader/>}</>
  );
};

export default PlayingPlaylist;
