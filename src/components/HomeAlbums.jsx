import React from 'react';
import Album from './Album';

const HomeAlbums = () => {
    return (
        <div className='albums'>
           <div className='albums-header'>
                <h1>Albums</h1>
                <p>see more</p>
            </div>
            <div className='albums-body'>
                <Album/>
                <Album/>
                <Album/>
                <Album/>
                <Album/>
                <Album/>
                <Album/>
                <Album/>
            </div>
        </div>
    );
};

export default HomeAlbums;