import React, { useEffect, useState } from 'react';
import "./Blogs.css"
import AllBlog from '../AllBlog/AllBlog';

const Blogs = () => {
    const handleAddToBookMark =()=>{
        console.log('added to items')
    }
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
                blogItems.map(blogItem => <AllBlog
                key={blogItem.id}
                blogItem={blogItem}
                ></AllBlog>)

               }
            </div>
            <div className="bookmark-container">
                <h3 className='spendTime'>Spent time on read : </h3>
                
                <h3>Bookmarked Blogs : </h3>
            </div>
        </div>
    );
};

export default Blogs;
