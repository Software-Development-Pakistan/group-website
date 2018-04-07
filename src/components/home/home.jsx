import React, {Component} from 'react';
import FeatureWrapper from './featureWrapper';
import BannerWrapper from './bannerWrapper';
import MainWrapper from './main/mainWrapper';
import axios from 'axios';

export default class Home extends Component {
    render(){
        return (
            <div>
                <FeatureWrapper />
                <BannerWrapper />
                <MainWrapper/>
            </div>
        );
    }
}


