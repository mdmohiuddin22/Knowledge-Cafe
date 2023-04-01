import React from 'react';
import './AllBlog.css'
const Product = (props) => {
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
                <h5 className='duration'>{duration}</h5>
               </div>

            <h1>{blogTitle}</h1>
            <h4>{markAsRead}</h4>

        </div>
    );
};

export default Product;