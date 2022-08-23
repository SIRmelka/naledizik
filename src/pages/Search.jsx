import React from 'react';
import SearchAlbums from '../components/SearchAlbums';
import SearchMusics from '../components/SearchMusics';
import SearchPlaylists from '../components/SearchPlaylists';

const Search = () => {
    return (
        <div>
            <SearchMusics/>
            <SearchAlbums/>
            <SearchPlaylists/>
            
        </div>
    );
};

export default Search;