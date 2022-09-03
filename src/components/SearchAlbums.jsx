import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context';
import Album from './Album';
import MiniLoader from './MiniLoader';

const SearchAlbums = () => {

    const navigate = useNavigate()
    const {getData,searchingTerm} = useContext(UserContext);

    const [albums,setAlbums] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        getData.searchAlbums(searchingTerm,{limit:3})
        .then((data) => {
            setLoading(false)
            setAlbums(data.albums.items)
        })
    },[searchingTerm])

    function seeMore(){
        navigate("../albums")
    }

    return (
        <div className='albums'>

            <div className='albums-header'>
                <h1>Albums <span className='results'></span></h1>
                <p className='see-more' onClick={()=>seeMore()}>see more</p>
            </div>

            <div className='albums-body'>
                {
                    !loading?
                    albums.map((album)=>{
                        return <Album key={album.id} id={album.id} albumName={album.name} artist={album.artists[0].name} background={album.images&&album.images[1].url}/>
                    }):<MiniLoader/>
                }
                
            </div>
        </div>
    );
};

export default SearchAlbums;