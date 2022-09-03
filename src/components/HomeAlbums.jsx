import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../context';
import Album from './Album';
import MiniLoader from './MiniLoader';

const HomeAlbums = () => {

    const {getData} = useContext(UserContext);

    const [albums,setAlbums] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        getData.getNewReleases({limit:6})
        .then((data) => {
            setAlbums(data.albums.items)
            setLoading(false)
        })
    },[])


    return (
        <div className='albums'>
           <div className='albums-header'>
                <h1>Albums</h1>

            </div>
            <div className='albums-body'>
                {
                    !loading?
                    albums.map((album)=>{
                        return <Album key={album.id} id={album.id} albumName={album.name} artist={album.artists[0].name} background={album.images[0].url}/>
                    }):<MiniLoader/>
                }
                
            </div>
        </div>
    );
};

export default HomeAlbums;