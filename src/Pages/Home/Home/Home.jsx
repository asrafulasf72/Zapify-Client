import React from 'react';
import Banner from '../Banner/Banner';
import HowWork from '../HowWork/HowWork';
import OurService from '../HowWork/OurService';
import Brand from '../Brand/Brand';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowWork />
            <OurService />
            <Brand />
        </div>
    );
};

export default Home;