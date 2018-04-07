import React from 'react';
import FeatureWrapper from './featureWrapper';
import BannerWrapper from './bannerWrapper';
import MainWrapper from './main/mainWrapper';
const Home = () => {
    return (
        <div>
            <FeatureWrapper />
            <BannerWrapper />
            <MainWrapper/>
        </div>
    );
}

export default Home;
