import React from 'react';
import {DiAndroid} from 'react-icons/di'
import Artiste from './Artiste';

const PresentationBanner = () => {
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
            <Artiste/>
            <Artiste/>
            <Artiste/>
            <Artiste/>
           </div>
        </div>
    );
};

export default PresentationBanner;