import React from 'react';
import './Sidebar.css';
import FeedIcon from '@mui/icons-material/Feed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import Profile from '../../assets/profile.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar__wrapper">
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <FeedIcon className='sidebar__icon'/>
            <span className="item__text">Feed</span>
          </li>
          <li className="sidebar__list-item">
            <ChatIcon className='sidebar__icon'/>
            <span className="item__text">Chats</span>
          </li>
          <li className="sidebar__list-item">
            <VideoLibraryIcon className='sidebar__icon'/>
            <span className="item__text">Videos</span>
          </li>
          <li className="sidebar__list-item">
            <GroupIcon className='sidebar__icon'/>
            <span className="item__text">Groups</span>
          </li>
          <li className="sidebar__list-item">
            <BookmarksIcon className='sidebar__icon'/>
            <span className="item__text">Bookmarks</span>
          </li>
          <li className="sidebar__list-item">
            <HelpOutlineIcon className='sidebar__icon'/>
            <span className="item__text">Questions</span>
          </li>
          <li className="sidebar__list-item">
            <WorkIcon className='sidebar__icon'/>
            <span className="item__text">Jobs</span>
          </li>
          <li className="sidebar__list-item">
            <EventIcon className='sidebar__icon'/>
            <span className="item__text">Events</span>
          </li>
          <li className="sidebar__list-item">
            <SchoolIcon className='sidebar__icon'/>
            <span className="item__text">Courses</span>
          </li>
        </ul>
        <button className="sidebar__btn">Show more</button>
        <hr className='sidebar__line'/>
        <ul className="sidebar__friend-list">
          <li className="sidebar__friend">
            <img src={Profile} alt="avatar" className="sidebar__friend-img" />
            <span className="sidebar__friend-name">John duy</span>
          </li>
          <li className="sidebar__friend">
            <img src={Profile} alt="avatar" className="sidebar__friend-img" />
            <span className="sidebar__friend-name">John duy</span>
          </li>
          <li className="sidebar__friend">
            <img src={Profile} alt="avatar" className="sidebar__friend-img" />
            <span className="sidebar__friend-name">John duy</span>
          </li>
          <li className="sidebar__friend">
            <img src={Profile} alt="avatar" className="sidebar__friend-img" />
            <span className="sidebar__friend-name">John duy</span>
          </li>
          <li className="sidebar__friend">
            <img src={Profile} alt="avatar" className="sidebar__friend-img" />
            <span className="sidebar__friend-name">John duy</span>
          </li>
          <li className="sidebar__friend">
            <img src={Profile} alt="avatar" className="sidebar__friend-img" />
            <span className="sidebar__friend-name">John duy</span>
          </li>
          <li className="sidebar__friend">
            <img src={Profile} alt="avatar" className="sidebar__friend-img" />
            <span className="sidebar__friend-name">John duy</span>
          </li>
          <li className="sidebar__friend">
            <img src={Profile} alt="avatar" className="sidebar__friend-img" />
            <span className="sidebar__friend-name">John duy</span>
          </li>
          <li className="sidebar__friend">
            <img src={Profile} alt="avatar" className="sidebar__friend-img" />
            <span className="sidebar__friend-name">John duy</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar