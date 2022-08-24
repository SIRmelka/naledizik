import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../context';
import Album from './Album';

const SearchAlbums = () => {

    const {getData,searchingTerm} = useContext(UserContext);

    const [albums,setAlbums] = useState([]);

    useEffect(()=>{
        getData.searchAlbums(searchingTerm,{limit:3})
        .then(data => setAlbums(data.albums.items))
    },[searchingTerm])

    return (
        <div className='albums'>

            <div className='albums-header'>
                <h1>Albums <span className='results'>12 results</span></h1>
                <p>see more</p>
            </div>

            <div className='albums-body'>
                {
                    albums.map((album)=>{
                        return <Album key={album.id} albumName={album.name} artist={album.artists[0].name} background={album.images&&album.images[0].url}/>
                    })
                }
                
            </div>
        </div>
    );
};

export default SearchAlbums;