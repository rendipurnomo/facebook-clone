import React from 'react';
import './Post.css';
import profile from '../../assets/profile.png';
import post from '../../assets/craft.jpg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublicIcon from '@mui/icons-material/Public';

const Post = () => {
  return (
    <div className='post'>
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__top-left">
            <img className='post__profile-img' src={profile} alt="avatar" />
            <div className='post__title'>
            <span className="post__username">Rendi purnomo</span>
            <div className='post__date-wrapper'>
            <span className="post__date">5 mins ago</span><PublicIcon fontSize='small'
            color='action'
            />
            </div>
            </div>
          </div>
          <div className="post__top-right">
            <MoreVertIcon className='post__icon' />
          </div>
        </div>
          <div className="post__center">
            <span className="post__text">hello everybody!!!</span>
            <img className='post__img' src={post} alt="avatar" />
          </div>
          <hr className='post__line' />
          <div className="post__bottom">
            <div className="post__bottom-left">
              <ThumbUpIcon
              className='post_icon-like'/>
              <FavoriteBorderIcon className='post_icon-love' />
              <span className="like__counter">35 people's like it</span>
            </div>
            <div className="post__bottom-right">
              <span className="post__comment-text">11 comment</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Post;