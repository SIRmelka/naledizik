import React from 'react';
import {AiOutlineHeart} from 'react-icons/ai'
const Album = ({albumName,artist,background}) => {
    return (
        <div className="album">
            <div className='album-cover' 
                style={{ backgroundImage:`url(${background})`}}
            >
            </div>
            <div className='album-info'>
                <span className='album-about-left'>
                    <p className="album-title">{albumName}</p>
                    <p className="album-artist">{artist}</p>
                </span>
                <span className="album-like-icon">
                    <AiOutlineHeart/>
                </span>
            </div>
            
        </div>
    );
};

export default Album;