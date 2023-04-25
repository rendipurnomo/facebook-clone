import React from 'react';
import './Topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import Profile from '../../assets/profile.png'


const Topbar = () => {
  return (
    <div className="topBar__container">
        <div className="topBar__left">
            <span className="logo">R-Social</span>
        </div>
        <div className="topBar__center">
            <div className="searchBar">
                <SearchIcon className='search__icon' />
                <input 
                type="text"
                placeholder="Search for friend, post or videos" 
                className="search__input" />
            </div>
        </div>
        <div className="topBar__right">
            <div className="topBar__links">
            <span className="topBar__link">Homepage</span>
            <span className="topBar__link">Timeline</span>
            </div>
            <div className="topBar__icons">
                <div className="topBar__icon">
                    <PersonIcon />
                    <span className="topBar__icon-badge">1</span>
                </div>
                <div className="topBar__icon">
                    <NotificationsIcon />
                    <span className="topBar__icon-badge">1</span>
                </div>
                <div className="topBar__icon">
                    <ChatIcon />
                    <span className="topBar__icon-badge">1</span>
                </div>
            </div>
            <img src={Profile} alt="avatar" className="topBar__image" />
        </div>
    </div>
  )
}

export default Topbar;