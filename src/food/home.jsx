import React from 'react'
import {Link} from 'react-router-dom';
import "../style/home.css";
import Banner from "../images/banner.jpeg";
import Layout from '../component/layout/layout';


function Home() {
  return (
    <>
   
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1 className='hero-heading'>Food Website</h1>
          <p className='hero-paragraph'>Best Food In India</p>
          <Link to="/menu">
            <button className='hero-button'>ORDER NOW</button>
          </Link>
        </div>
      </div>
    <Layout/>
    </>
  )
}

export default Home;