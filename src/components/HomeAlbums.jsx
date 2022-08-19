import React, { useEffect } from 'react';
import { useContext } from 'react';
import UserContext from '../context';
import Album from './Album';

const HomeAlbums = () => {

    const {getData} = useContext(UserContext);

    useEffect(()=>{

        getData.getMySavedAlbums()
        .then(data => console.log(data))
    })

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