import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const MusicTile = ({artistName,trackName,duration}) => {

    

    return (

        <div className='music-tile'>
           <div className='left'>
                <p className='title'>
                    {trackName}
                </p>
                <p className='artist'>
                    {artistName}
                </p>
           </div>
           <div className='right'>
                <span className='time'><p>{duration}</p></span>
                <span className='icon'><FaPlayCircle/></span>
           </div>
        </div>
    );
};

export default MusicTile;