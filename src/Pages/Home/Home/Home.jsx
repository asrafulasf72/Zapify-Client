import React from 'react';
import Banner from '../Banner/Banner';
import HowWork from '../HowWork/HowWork';
import OurService from '../HowWork/OurService';
import Brand from '../Brand/Brand';
import ParcelInfo from '../Brand/ParcelInfo';
import Merchant from '../Brand/Merchant';
import Reviews from '../Reviews/Reviews';

const reviewPromise = fetch('./reviews.json').then((res)=>res.json())

const Home = () => {
    return (
        <div>
            <Banner />
            <HowWork />
            <OurService />
            <Brand />
            <ParcelInfo />
            <Merchant />
            <Reviews reviewPromise={reviewPromise}/>
        </div>
    );
};

export default Home;