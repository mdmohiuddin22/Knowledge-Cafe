import React, { useEffect, useState } from 'react';
import Product from '../AllBlog/AllBlog';
import "./Blogs.css"

const Blogs = () => {
    const [blogItems, setBlogItems] = useState([]);

    useEffect(() => {
        fetch('programar.json')
            .then(res => res.json())
            .then(data => setBlogItems(data))
    }, []);

    return (
        <div className='container'>
            <div className="blog-container">
               {
                blogItems.map(blogItem => <Product 
                key={blogItem.id}
                blogItem={blogItem}
                ></Product>)
               }
            </div>
            <div className="bookmark-container">
                <h3>My Bookmark</h3>
            </div>
        </div>
    );
};

export default Blogs;
