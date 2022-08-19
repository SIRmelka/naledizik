import axios from 'axios';
import { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss'
import Header from './components/Header';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Search from './pages/Search';


function App() {


  const user = useMemo(()=>{

    axios.get("https://api.spotify.com/v1/me",{
      headers:{
        'Authorization':"Bearer BQBlnEL5pAT5mKh1TSl56EpXF_jlkjii5YBxN1OAE184y1cGte3T25iq8WsRO_3TAUpvxHAyA1RQ5yUee3Fvc9OPWufv1sHT5uWxqh054TSgwBT_fQ6YYPoaXYRqSZ0v8iy3zkIL63Wl3FqAyLBhiZcqACYI9S2YGcmIGYhUOlFqw46YEM4ub5qXAxJy1_SmG3k"
      }
    }).then(reponse => console.log(reponse))

  })

  console.log(user);


  return (

    <div className='home'>

      <div className='sidebar-section'>
            <SideBar/>
      </div>

      <div className='content-section'>

      <Header/>

      <div className='middle'>

      <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/login" element={<Login/>} />

          </Routes>

            

        </div>
        
    </div>

</div>    
   
   
  );
}

export default App;