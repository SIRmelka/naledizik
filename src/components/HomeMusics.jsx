import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import UserContext from '../context';
import MusicTile from './MusicTile';

const HomeMusics = () => {

    const timeConvert = (number) =>{

        var s = Math.floor(number / 1000) % 60;
      //minutes
        var m = Math.floor(number / 60000) % 60;
      //affichage
        var chaine = m+":"+s;
        return chaine
      
      }

    const [tracks,setTracks] = useState([]);


    const {getData} = useContext(UserContext)

    useEffect(()=>{

        getData.getMyTopTracks({limit:10})
        .then(data => setTracks(data.items))

    },[]

    )
    console.log(tracks);
    return (
        <div className="home-music">
           <div className='home-music-header'>
                <h1>you may also like</h1>
           </div>
           <div className='home-music-body'>

            {
                tracks.map((track)=>{
                    return(
                        <MusicTile 
                        key={track.id} 
                        artistName={track.artists[0].name}
                        trackName={track.name}
                        duration={timeConvert(track.duration_ms )}
                        />
                    )
                })
            }
               
            </div>
        </div>
    );
};

export default HomeMusics;