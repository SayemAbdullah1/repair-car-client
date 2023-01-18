import React from 'react';
import About from './About/About';
import BannerHero from './Banner/BannerHero';

const Home = () => {
    return (
        <div>
            <BannerHero></BannerHero>
            <About></About>
        </div>
    );
};

export default Home;