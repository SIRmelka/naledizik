import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../context';
import Album from './Album';

const HomeAlbums = () => {

    const {getData} = useContext(UserContext);

    const [albums,setAlbums] = useState([]);

    useEffect(()=>{
        getData.getNewReleases({limit:12})
        .then(data => setAlbums(data.albums.items))
    },[])

    console.log(albums);

    return (
        <div className='albums'>
           <div className='albums-header'>
                <h1>Albums</h1>
                <p>see more</p>
            </div>
            <div className='albums-body'>
                {
                    albums.map((album)=>{
                        return <Album key={album.id} albumName={album.name} artist={album.artists[0].name} background={album.images[0].url}/>
                    })
                }
                
            </div>
        </div>
    );
};

export default HomeAlbums;