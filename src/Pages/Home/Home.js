import React from 'react';
import About from './About/About';
import BannerHero from './Banner/BannerHero';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <BannerHero></BannerHero>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;