import React from 'react';
import Banner from '../Banner/Banner';
import HowWork from '../HowWork/HowWork';
import OurService from '../HowWork/OurService';
import Brand from '../Brand/Brand';
import ParcelInfo from '../Brand/ParcelInfo';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowWork />
            <OurService />
            <Brand />
            <ParcelInfo />
        </div>
    );
};

export default Home;