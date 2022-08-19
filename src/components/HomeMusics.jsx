import React from 'react';
import MusicTile from './MusicTile';

const HomeMusics = () => {
    return (
        <div className="home-music">
           <div className='home-music-header'>
                <h1>you may also like</h1>
           </div>
           <div className='home-music-body'>
                <MusicTile/>
                <MusicTile/>
                <MusicTile/>
                <MusicTile/>
                <MusicTile/>
                <MusicTile/>
                <MusicTile/>
            </div>
        </div>
    );
};

export default HomeMusics;