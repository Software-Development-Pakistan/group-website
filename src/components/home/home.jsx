import React, {Component} from 'react';
import FeatureWrapper from './featureWrapper';
import BannerWrapper from './bannerWrapper';
import MainWrapper from './main/mainWrapper';
import axios from 'axios';

export default class Home extends Component {

    constructor(props){
        super(props);

        this.state = {data: ''};
    }
    componentDidMount(){
        axios.get('localhost:3004/json-server/home')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
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


