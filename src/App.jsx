import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
<Header></Header>
<Blogs></Blogs>
<div className='Questions'>
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
  )
}

export default App
