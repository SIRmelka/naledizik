import React from 'react';
import {FiPlay,FiMusic} from 'react-icons/fi'

const Playlist = () => {
    return (

        <div className='playlist' style={{backgroundImage:"url('https://i.scdn.co/image/ab67706c0000bebb734c62b9c135ef939c7ea952')"}}>
            <div className='playlist-info'>
                <span className='author'>
                    <p>Fally ipupa</p>
                    <span>
                        <FiMusic className='icon'/> 
                        52 morceaux
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