import React from 'react';

const Artiste = ({image,name}) => {
    return (
        <div className="artiste" style={{backgroundImage:`url(${image})`}}>
            <div className="artist-name"><p>{name}</p></div>
        </div>
    );
};

export default Artiste;