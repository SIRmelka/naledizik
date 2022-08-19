import React from 'react';
import {DiAndroid} from 'react-icons/di'
import Artiste from './Artiste';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../context';

const PresentationBanner = () => {

    const {getData} = useContext(UserContext)

    const [topArtists,setTopArtists] = useState([])
    
    useEffect(()=>{
         getData.getMyTopArtists({limit:4})
    .then((data) =>{setTopArtists(data.items)});
    },[])


    return (
        <div className='presentation-banner'>
           <div className='banner'>
                <div className='banner-content'>
                    <h2>Naledi</h2>
                    <p>Enjoy songs from your favorite artists all over the world </p>
                    <button><span><DiAndroid/></span>Download</button>
                </div>
           </div>
           <div className='artists'>
            {  
            topArtists.map((artist)=>{
                return(
                     <Artiste key={artist.id} name ={artist.name} image={artist.images[0].url}/>
                )
            })
               
           
            }
           </div>
        </div>
    );
};

export default PresentationBanner;