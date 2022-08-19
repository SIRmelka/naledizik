import React from 'react';
import {FiPlay,FiMusic} from 'react-icons/fi'

const Playlist = ({playlistName,tracksNumber,background}) => {

 

    return (

        <div className='playlist' style={{backgroundImage: `url(${background})`}}>
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