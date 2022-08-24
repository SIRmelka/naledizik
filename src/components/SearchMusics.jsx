import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import UserContext from '../context';
import MusicCard from './MusicCard';

const SearchMusics = () => {

    const timeConvert = (number) =>{

        var s = Math.floor(number / 1000) % 60;
      //minutes
        var m = Math.floor(number / 60000) % 60;
      //affichage
        var chaine = m+":"+s;
        return chaine
      
      }
    
    
    const {getData,searchingTerm,curentlyPlaying} = useContext(UserContext)
    
    const [tracks,setTracks] = useState([]);


   

    useEffect(()=>{

        getData.searchTracks(searchingTerm,{limit:6})
        .then(data => setTracks(data.tracks.items))

    },[searchingTerm]

    )

    console.log(tracks);

    return (
        <div className="search-music">
           <div className='search-music-header'>
                <h1>Musiques <span className='results'> 21 results</span></h1>
           </div>
           <div className='search-music-body'>

            {
                tracks.map((track)=>{
                    return(
                        <MusicCard 
                        key={track.id}
                        uri={track.uri}
                        artistName={track.artists[0].name}
                        trackName={track.name.substring(0,30)}
                        duration={timeConvert(track.duration_ms )}
                        background={track.album.images&&track.album.images[1].url}
                        style={track.uri==curentlyPlaying?"music-card playing":" music-card notplaying"}
                        />
                    )
                })
            }
               
            </div>
        </div>
    );
};

export default SearchMusics;