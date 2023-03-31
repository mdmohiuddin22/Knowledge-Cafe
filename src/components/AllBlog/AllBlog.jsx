import React from 'react';
import './AllBlog.css'
const Product = (props) => {
   const {coverImg,name} =props.blogItem;
    return (
        <div>
        <img src={coverImg} alt="" />
        </div>
    );
};

export default Product;