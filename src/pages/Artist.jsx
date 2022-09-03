import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { GoPlay } from 'react-icons/go';
import Album from '../components/Album';
import MiniLoader from '../components/MiniLoader';
import MusicTile from '../components/MusicTile';
import UserContext from '../context';

const Artist = () => {


    const {getData,selectedArtist,setCurentlyPlaying,setLoading} = useContext(UserContext)
    const [topSongs,setTopSongs] = useState([])
    const [artist,setArtist] = useState([])
    const [albums,setAlbums] = useState([])
    const [loading,setLoader] = useState(true)

    setLoading(false)
    useEffect(()=>{

        setTimeout(()=>{
          getData.getArtistTopTracks(selectedArtist,"CD",{limit:5})
            .then(data => {
                setTopSongs(data.tracks)
                setLoader(false)
            }
            )
            
            getData.getArtistAlbums(selectedArtist,{limit:6})
            .then( data => setAlbums(data.items))
        },500)


    },[selectedArtist])

    useEffect(()=>{
        getData.getArtist(selectedArtist)
        .then(data=>setArtist(data))
    },[selectedArtist])
    
    console.log(albums);

    function playartist(uri){
        setCurentlyPlaying(uri)
    }
    return (
        !loading?
        <div>
            <div className="artist-banner">
                <div className='about'>
                    <div className="profile" style={{backgroundImage:`url(${artist?artist.images[0].url:""})`}}>
                    </div>
                    <div className='identities'>
                    <h1>{topSongs.length>0&&topSongs[0].artists[0].name}</h1>
                    <GoPlay onClick={()=>playartist(topSongs[0].artists[0].uri)} className='icon'/>
                    </div>
                </div>
                <div className='popular-songs'>
                    <div className='toper'>
                        <p>Most Played songs</p>
                    </div>
                    <div className='content'>
                        {
                            topSongs.map((song)=>{
                                return <MusicTile key={song.id}
                                background={song.album.images[1].url}
                                trackName={song.name} duration={"3:32"}
                                uri={song.uri}
                                />
                            })
                        }    
                    </div>
                </div>
            </div>
            <h2 className='albums-title'>Albums de <span>{artist.name}</span></h2>
            <div className='artist-albums'>
                
                {
                    albums.map((album)=>{
                        return <Album 
                        key={album.id}
                        albumName={album.name}
                        artist={album.release_date.substring(0,4)}
                        background={album.images[1].url}
                        />
                    })
                }
            </div>  
        </div>:<MiniLoader/>
    );
};

export default Artist;