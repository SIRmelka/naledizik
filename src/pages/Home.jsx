import React from 'react';
import { useContext } from 'react';
import HomeAlbums from '../components/HomeAlbums';
import HomeMusics from '../components/HomeMusics';
import HomePlaylists from '../components/HomePlaylists';
import PresentationBanner from '../components/PresentationBanner';
import UserContext from '../context';




const Home = () => {

    const {setLoading} = useContext(UserContext)

    setLoading(false)
    
    return (
       <>
        <PresentationBanner/>
        <HomePlaylists/>
        <HomeAlbums/>  
        <HomeMusics/>
       </>
    );
};

export default Home;