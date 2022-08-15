import React from 'react';

const Artiste = ({image}) => {
    return (
        <div className="artiste" style={{backgroundImage:"url('https://imageio.forbes.com/specials-images/imageserve/5d00038934a5c40008481c75/Richest-rappers/0x0.jpg?format=jpg&crop=3983,2106,x2,y708,safe&height=2106&width=3983')"}}>
            <div className="artist-name"><p>Black M</p></div>
        </div>
    );
};

export default Artiste;