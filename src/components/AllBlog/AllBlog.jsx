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
           <div>
           <h1>=======Questions and Answers=====</h1>
           <h2>1. props vs state?</h2>
           <h3>Ans: The difference comes in which component the data are owned. The state is owned locally, and the component itself updates it. Props are owned and read only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child</h3>
           <h2>2. How does useState work?</h2>
           <h3>Ans: useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</h3>
           <h2>3. Purpose of useEffect other than fetching data.</h2>
           <h3>Ans: The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.</h3>
           <h2>4. How Does React work?</h2>
           <h3>Ans: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</h3>
           </div>

        </div>
    );
};

export default AllBlog;