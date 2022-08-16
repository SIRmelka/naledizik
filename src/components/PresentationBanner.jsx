import React from 'react';
import {DiAndroid} from 'react-icons/di'
import Artiste from './Artiste';

const PresentationBanner = () => {

    const artistes = [
        {
            name:"Ed sheeran",
            picture:"https://i.discogs.com/eeIQRaK7WCMMZUsLDdNqAzpdatoAYg7-MfEJFXbJ1y0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIxODQ0/ODItMTYyNDYxNzk3/NS0xMjcxLmpwZWc.jpeg"
        },
        {
            name:"Black M",
            picture:"https://static2.greatsong.net/artiste/276x276/black-m-208226.jpg"
        },
        {
            name:"Burna boy",
            picture:"https://www.afrik.com/wp-content/uploads/2020/08/burna-boy-gq-style-spring-summer-2020-promo-scaled-1.jpg"
        },
        {
            name:"Katty perry",
            picture:"https://static1.purebreak.com.br/articles/6/70/15/6/@/266341-katy-perry-usa-macacao-com-fotos-de-orla-diapo-1.jpg"
        }
    ]

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
            <Artiste name ={artistes[0].name} image={artistes[0].picture}/>
            <Artiste name ={artistes[1].name} image={artistes[1].picture}/>
            <Artiste name ={artistes[2].name} image={artistes[2].picture}/>
            <Artiste name ={artistes[3].name} image={artistes[3].picture}/>
           </div>
        </div>
    );
};

export default PresentationBanner;