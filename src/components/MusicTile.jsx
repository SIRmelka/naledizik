import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const MusicTile = () => {
    return (
        <div className='music-tile'>
           <div className='left'>
                <p className='title'>
                    Désolé
                </p>
                <p className='artist'>
                    Sexion dassaut
                </p>
           </div>
           <div className='right'>
                <span className='time'><p>3:21</p></span>
                <span className='icon'><FaPlayCircle/></span>
           </div>
        </div>
    );
};

export default MusicTile;