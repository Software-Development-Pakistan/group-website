import React, { Component } from 'react';
import Header from './common/header.jsx';
import Home from './home/home.jsx';
import About from './about/about.jsx';
import Footer from './common/footer';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div id="page-wrapper">
                <Header />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;
