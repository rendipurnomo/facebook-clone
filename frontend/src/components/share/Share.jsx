import React from 'react';
import './Share.css';
import Profile from '../../assets/profile.png';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const Share = () => {
  return (
    <div className="share">
      <div className="share__wrapper">
        <div className="share__top">
          <img className='share__img' src={Profile} alt="avatar" />
          <input 
          type="text" 
          placeholder="what's your mine?"
          className="share__input" />
        </div>
        <hr className='share__line' />
        <div className="share__bottom">
          <div className="share__options">
            <div className="share__option">
              <PermMediaIcon 
              htmlColor='tomato'
              className="share__icon" />
              <span className="share__option-text">Photos or Videos</span>
            </div>
            <div className="share__option">
              <LabelIcon 
              htmlColor='blue'
              className="share__icon" />
              <span className="share__option-text">Tag</span>
            </div>
            <div className="share__option">
              <RoomIcon
              htmlColor='brown'
              className="share__icon" />
              <span className="share__option-text">Location</span>
            </div>
            <div className="share__option">
              <InsertEmoticonIcon 
              htmlColor='goldenrod'
              className="share__icon" />
              <span className="share__option-text">Feelings</span>
            </div>
          </div>
          <button className='share__btn'>Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share