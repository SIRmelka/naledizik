import React from 'react';
import { useEffect ,useState} from 'react';
import { useContext } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FiHeart, FiShuffle } from 'react-icons/fi';
import MiniLoader from '../components/MiniLoader';
import MusicTile from '../components/MusicTile';
import UserContext from '../context';

const PlayingAlbum = () => {
    const{getData,setLoading,playingAlbum,setCurentlyPlaying} = useContext(UserContext)
    setLoading(false)
    const[loader,setLoader] = useState(true)
    const [album,setAlbum] = useState([])
    const [tracks,setTracks] = useState([])
    const [isLiked,setIsLiked] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    function like()
    {
        setIsLiked(!isLiked)
    }
    function play()
    {
        setIsPlaying(true)
    }

    const timeConvert = (number) =>{

        var s = Math.floor(number / 1000) % 60;
      //minutes
        var m = Math.floor(number / 60000) % 60;
      //affichage
        var chaine = m+":"+s;
        return chaine
      
      }


    useEffect(()=>{
        setLoader(true)
       getData.getAlbum(playingAlbum)
       .then((data) => {
            setAlbum(data)
            setLoader(false)
        })
    },[])

    useEffect(()=>{
        setLoader(true)
        getData.getAlbumTracks(playingAlbum)
        .then((data)=>{
            setTracks(data.items)
            setLoader(false)
        })
    },[])

    return (
        <div className='album-playing'>
            {   !loader?
                <div className='playing-album' style={{backgroundImage:`url(${album.images?album.images[1].url:""})`}}>
                    <div className='about-album'>
                <div className='artist-avatar' style={{backgroundImage:`url(${album.images?album.images[1].url:""})`}}>

                </div>

                <div className='info'>
                    <p className='album-title'>
                        {album.name}
                    </p>
                    <p className='album-date'>
                        {album.release_date?album.release_date.substring(0,4):"pas connu"}
                    </p>
                </div>
                <div className='additionals'>
                   <span onClick={()=>like()}>{!isLiked?<FiHeart/>:<AiFillHeart/>}</span> 
                </div>

            </div>

        </div>:<MiniLoader/>

        }
        <div className='toper-tracks'>
             <h3>Tracks</h3>
             <span onClick={()=>{
                setCurentlyPlaying(album.uri)
                play()
                }}>{!isPlaying?<FiShuffle/>:<span className='playing'><img src="assets/sound.gif"></img></span>}</span>
        </div>
        <div className='album-tracks'>
            
           
                {
                    !loader?
                    tracks.map((track)=>{
                        return <MusicTile key={track.id}
                        trackName={track.name}
                        duration={timeConvert(track.duration_ms)
                        }
                        background={album.images?album.images[2].url:""}
                        uri={track.uri}
                        />
                    }):<MiniLoader/>
                }
        </div>
    </div>
    );
};

export default PlayingAlbum;