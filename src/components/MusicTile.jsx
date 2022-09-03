import React, { useContext } from 'react';
import { useState } from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import UserContext from '../context';

    const MusicTile = ({artistName,trackName,duration,background,uri}) => {
    const {setCurentlyPlaying,curentlyPlaying} = useContext(UserContext)
    const [playing,SetPlaying] = useState(false)

    const isThePlayed = curentlyPlaying == uri

    function togglePlay(){
            SetPlaying(!playing)
    }

    return (

        <div className='music-tile' onClick={()=>{
            setCurentlyPlaying(uri)
            togglePlay()
            }}>
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
                <span className='icon'>{!isThePlayed?<FaPlayCircle/>:<FaPauseCircle/>}</span>
           </div>
        </div>
    );
};

export default MusicTile;