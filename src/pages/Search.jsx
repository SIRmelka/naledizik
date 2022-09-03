import React from 'react';
import { useContext } from 'react';
import SearchAlbums from '../components/SearchAlbums';
import SearchMusics from '../components/SearchMusics';
import SearchPlaylists from '../components/SearchPlaylists';
import UserContext from '../context';

const Search = () => {
    const {setLoading} = useContext(UserContext)
    setLoading(false)
    return (
        <div>
            <SearchMusics/>
            <SearchAlbums/>
            <SearchPlaylists/>
            
        </div>
    );
};

export default Search;