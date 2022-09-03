import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context';
const Album = ({albumName,artist,background,id}) => {

    const {setPlayingAlbum} = useContext(UserContext)
    const navigation = useNavigate()
    const [isLiked,setIsLiked] = useState(false)

    function like(){
        setIsLiked(!isLiked)
    }
    function showAlbum(id){
        setPlayingAlbum(id)
        navigation("../Album")
    }
    return (
        <div className="album" onClick={()=>showAlbum(id)}>
            <div className='album-cover' 
                style={{ backgroundImage:`url(${background})`}}
            >
            </div>
            <div className='album-info'>
                <span className='album-about-left'>
                    <p className="album-title">{albumName}</p>
                    <p className="album-artist">{artist}</p>
                </span>
                <span onClick={()=>like()} className="album-like-icon">
                    {!isLiked?<AiOutlineHeart/>:<AiFillHeart/>}
                </span>
            </div>
            
        </div>
    );
};

export default Album;