import React, { useContext } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import UserContext from '../context';

    const MusicTile = ({artistName,trackName,duration,background,uri}) => {
    const {setCurentlyPlaying} = useContext(UserContext)

    

    return (

        <div className='music-tile' onClick={()=>setCurentlyPlaying(uri)}>
            <div className='pic' style={{backgroundImage: `url(${background})`}}>
            </div>
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