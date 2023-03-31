import React from 'react';
import './AllBlog.css'
const Product = (props) => {
   const {coverImg,name,authorImg,blogTitle,duration} =props.blogItem;
    return (
        <div>
        <img className='cover-img' src={coverImg} alt="" />
        <img className='author-img' src={authorImg} alt="" />
        <h3>{name}</h3>
        <h5>Mar 14 (4 Days ago)</h5>
        <h1>{blogTitle}</h1>
        <h5>{duration}</h5>
        </div>
    );
};

export default Product;