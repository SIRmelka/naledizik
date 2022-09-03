import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import Album from '../components/Album';
import HomeAlbums from '../components/HomeAlbums';
import MiniLoader from '../components/MiniLoader';
import UserContext from '../context';

const Albums = () => {
    const [savedAlbums,setSavedAlbums] = useState([])
    const [loading,setLoader] = useState(true)

    const {getData,setLoading} = useContext(UserContext)


    setLoading(false)

    useEffect(()=>{
        getData.getMySavedAlbums()
    .then((data) => {
        setSavedAlbums(data.items)
        setLoader(false)
    })
    },[])
    
    console.log(savedAlbums);
    return (
        <div className='albums'>
            <h3>Your favorites Albums</h3>
            <div className='albums-body'>
            {
            
            !loading?
            savedAlbums.map((album)=>{
                return(
                    <>
                    <Album key={album.album.id} id={album.album.id} albumName={album.album.name} artist={album.album.artists[0].name } background={savedAlbums[0].album.images[0].url}/>
                   
                </>)
            } )
           
            
            :<MiniLoader/>}</div>

          
            <HomeAlbums/>
            
        </div>
    );
};

export default Albums;