
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const CLIENT_ID = "705a7b670ab9408488ca35198bc4b379";
    const REDIRECT_UTI = "http://localhost:3000/login";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPE = "user-follow-read playlist-read-private user-read-private user-read-email user-read-playback-state user-top-read user-library-modify user-library-read user-read-currently-playing playlist-read-private user-read-recently-played";
    
    const [token,setToken] = useState("");

    const successConnected = useNavigate()

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


    console.log(token);
    return (
      
        <div>
            <h2>
                login please
            </h2>{
                  !token?<a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_UTI}&response_type=${RESPONSE_TYPE}`}>
                  <button>Login with spotify</button>
                  </a>:successConnected("../",{replace:true})
            }
          
        </div>
    );
};

export default Login;