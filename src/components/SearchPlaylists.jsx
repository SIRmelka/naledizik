import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext} from 'react';
import UserContext from '../context';
import Playlist from './Playlist';

const SearchPlaylists = () => {

    const {getData,searchingTerm} = useContext(UserContext)
    const [playlists,setPlaylists] = useState([])


    useEffect(()=>{
            getData.searchPlaylists(searchingTerm,{limit:4})
            .then((data)=>{
                setPlaylists(data.playlists.items);
            })
        },[searchingTerm]
    )
    

    return (
        <div className='playlists'>
                        <div className='playlists-header'>
                            <span><h1>Playlists<span className='results'></span></h1></span>
                            <span><p>see more</p></span>
                        </div>
                        <div className='playlists-body'>
                            {
                               playlists?
                               
                               playlists.map((playlist)=>{
                                   
                                     return(   <Playlist
                                            playlistName={playlist.name}
                                            tracksNumber={11}
                                            background={playlist.images.length!==0&&playlist.images[0].url}
                                            key={playlist.id}
                                        />)
                                }):"sd"
                            }
                            
                        </div>
        </div>
    );
};

export default SearchPlaylists;