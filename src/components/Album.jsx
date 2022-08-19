import React from 'react';
import {AiOutlineHeart} from 'react-icons/ai'
const Album = () => {
    return (
        <div className="album">
            <div className='album-cover'>

            </div>
            <div className='album-info'>
                <span>
                    <p className="album-title">Album</p>
                    <p className="album-artist">Katty perry</p>
                </span>
                <span className="album-like-icon">
                    <AiOutlineHeart/>
                </span>
            </div>
            
        </div>
    );
};

export default Album;