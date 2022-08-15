import React from 'react';
import {IoMdArrowDropdown} from 'react-icons/io'

const UserAvatar = () => {
    return (
        <div className='avatar'>
            <span className='circle-avatar'>
                <div className='avatar-picture'
                style={{backgroundImage:"url(https://kda.mo.cloudinary.net/img/malkia-kabamba.jpg)"}}
                ></div>
            </span>
            <span><p>Root M.</p></span>
            <span className='drawer'>
                <IoMdArrowDropdown/>
            </span>
        </div>
    );
};

export default UserAvatar;