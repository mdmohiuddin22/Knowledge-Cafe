import React from 'react';
import './AllBlog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const AllBlog = (props) => {
    const { coverImg, name, authorImg, blogTitle, duration, markAsRead } = props.blogItem;
    return (
        <div className='blogDetails'>
            <img className='cover-img' src={coverImg} alt="" />
            <div className='nameDetails'>
                <img className='author-img' src={authorImg} alt="" />
               
               <div className='nameDate'>
               <h3 className='name'>{name}</h3>
                <h5>Mar 14 (4 Days ago)</h5>
               </div>
                <h5  className='duration'>{duration} <FontAwesomeIcon icon={faBookmark} /></h5>
               </div>

            <h1>{blogTitle}</h1>
            <h4 className='mark'>{markAsRead}</h4>

        </div>
    );
};

export default AllBlog;