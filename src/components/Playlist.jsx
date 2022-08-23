import React from 'react';
import {FiPlay,FiMusic} from 'react-icons/fi'
// import { useNavigate } from 'react-router-dom';

const Playlist = ({playlistName,tracksNumber,background,changePlaylist}) => {
    
    // const navigate = useNavigate();                 
    
  
    
    return (

        <div className='playlist' style={{backgroundImage: `url(${background})`}}
            onClick={changePlaylist}
        >
            <div className='playlist-info'>
                <span className='author'>
                    <p>{playlistName}</p>
                    <span>
                        <FiMusic className='icon'/>
                        {tracksNumber} morceaux
                    </span>
                </span>
                <span className='play-icon'>
                    <FiPlay/>
                </span>
            </div>
        </div>
        
    );
};

export default Playlist;