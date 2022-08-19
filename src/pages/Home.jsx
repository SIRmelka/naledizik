import React from 'react';
import HomeAlbums from '../components/HomeAlbums';
import HomeMusics from '../components/HomeMusics';
import HomePlaylists from '../components/HomePlaylists';
import PresentationBanner from '../components/PresentationBanner';


const Home = () => {
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