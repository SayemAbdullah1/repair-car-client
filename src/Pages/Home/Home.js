import React from 'react';
import About from './About/About';
import BannerHero from './Banner/BannerHero';
import Products from './Products/Products';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <BannerHero></BannerHero>
            <About></About>
            <Services></Services>
            <Products></Products>
        </div>
    );
};

export default Home;