import React from 'react';
import UserAvatar from '../components/UserAvatar';
import SearchBar from '../components/SearchBar';

const Header = () => {
    return (
        <div className='top'>
        <div className='searchBar-section'> 
            <SearchBar/>
        </div>
        <div className='avatar-section'> 
            <UserAvatar/>
        </div>
    </div>

    );
};

export default Header;