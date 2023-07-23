import React from 'react'
import classes from '../cssFile/Home.module.css';
import HomeProduct  from './HomeProduct';
import HomeSlide  from './HomeSlide';
import About from './About';
import Contact from './Contact';

const Home = () => {
  

  return (
    <main className={classes.home}>
          <HomeSlide />
          <HomeProduct />
          <About />
          <Contact />
    </main>
  );
};

export default Home;
