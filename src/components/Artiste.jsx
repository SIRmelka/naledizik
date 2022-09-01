import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context';

const Artiste = ({image,name,id}) => {

    const {setSelectedArtist} = useContext(UserContext)
    const navigate = useNavigate()

    function changeArtist(artistid){
        setSelectedArtist(artistid)
        navigate("./artist")
    }

    return (
        <div onClick={()=>changeArtist(id)} className="artiste" style={{backgroundImage:`url(${image})`}}>
            <div className="artist-name"><p>{name}</p></div>
        </div>
    );
};

export default Artiste;