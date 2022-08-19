import React from 'react';
import {IoMdArrowDropdown} from 'react-icons/io'

const UserAvatar = ({picture,username}) => {

    return (
        <div className='avatar'>
            <span className='circle-avatar'>
                <div className='avatar-picture'
                style={{backgroundImage:`url(${picture})`}}
                ></div>
            </span>
            <span><p>{username}</p></span>
            <span className='drawer'>
                <IoMdArrowDropdown/>
            </span>
        </div>
    );
};

export default UserAvatar;