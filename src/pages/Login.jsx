
import React, { useEffect } from 'react';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const CLIENT_ID = "705a7b670ab9408488ca35198bc4b379";
    // const REDIRECT_UTI = "https://naledizik.vercel.app/";
    const REDIRECT_UTI = "http://localhost:3000/login";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPE = "streaming user-follow-read playlist-read-private user-read-private user-read-email user-read-playback-state user-top-read user-library-modify user-library-read user-read-currently-playing playlist-read-private user-read-recently-played  user-modify-playback-state";
    
    const [token,setToken] = useState("");


    useEffect( ()=>{
        const hash = window.location.hash;
        let newtoken = window.localStorage.getItem("token")

        if (!token && hash){
            newtoken = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            console.log("new token",newtoken);
            window.localStorage.setItem("token",newtoken)
            setToken(newtoken)
        }
        window.location.hash="";
    },[])

    function connectUser(){
        location.replace("/")
        localStorage.setItem("connected",true)
    }

    function authentify()
    {
        window.location.href =`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_UTI}&response_type=${RESPONSE_TYPE}`;
    }
    return (
      
        <div className='login'>
            {!token?
            
            <><div className='login-main-section'>
                <div className='login-images-section'>

                </div>
                <div className='login-connexion-section'>
                    <img src='assets/logoHome.png'></img>
                  <button onClick={authentify} className='login-btn'>Login with spotify</button>
              
                </div>
               
            </div><p>All right reserved octodesign developement</p>
           
            </>
            
            :connectUser()
            }

        </div>
    );
};

export default Login;