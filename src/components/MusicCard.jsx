import React from 'react';
import { useContext } from 'react';
import { RiHeart2Line } from 'react-icons/ri';
import UserContext from '../context';

const MusicCard = ({artistName,trackName,duration,background,uri,style}) => {

    const {setCurentlyPlaying} = useContext(UserContext)

    function setPlaying(id){
        setCurentlyPlaying(id)
    }

    return (

        <div className={style} onClick={()=>setPlaying(uri)}>

            <div className="music-card-body">
                <div className='top-info'>
                    <span className='time'><p>{duration}</p></span>
                    <span className='icon'><RiHeart2Line/> </span>
                </div>
                <div className='image' style={{backgroundImage: `url(${background})`}}>
                  
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