import React, { useState } from 'react';
import { useContext} from 'react';
import { RiHeart2Fill, RiHeart2Line } from 'react-icons/ri';
import UserContext from '../context';

const MusicCard = ({artistName,trackName,duration,background,uri,style}) => {

    const {setCurentlyPlaying} = useContext(UserContext)
    const [liked,setLiked] = useState(false)

    function setPlaying(id){
        setCurentlyPlaying(id)
    }
    function like(){
        setLiked(!liked)
    }

    return (

        <div className={style} >

            <div className="music-card-body">
                <div className='top-info'>
                    <span className='time'><p>{duration}</p></span>
                    <span onClick={()=>like()} className='icon'>{!liked?<RiHeart2Line/>:<RiHeart2Fill/> }</span>
                </div>
                <div onClick={()=>setPlaying(uri)} className='image' style={{backgroundImage: `url(${background})`}}>
                  
                </div>
                <div className='about'>
                    <p className='title'>
                        {trackName}
                    </p>
                    <p className='artist'>
                        {artistName}
                    </p>
                </div>
            </div>

           <div className='left'>
               
           </div>
           <div className='right'>
                
           </div>
        </div>
    );
};

export default MusicCard;