import React from 'react';
import * as HeaderData from '../../data/header.js';

const Header = () => {
    const { navigationLinks } = HeaderData;
    return (
        <div id="header-wrapper">
            <div id="header" className="container">
                <h1 id="logo"><a href="index.html">Software Development Pakistan</a></h1>
                <nav id="nav">
                    <ul>
                        <li><a className="icon fa-home" href="/"><span>{navigationLinks.home}</span></a></li>
                        <li><a className="icon fa-home" href="/about"><span>{navigationLinks.about}</span></a></li>
                        <li>
                            <a href="#" className="icon fa-bar-chart-o"><span>Programs</span></a>
                            <ul>
                                <li><a href="/programs/opensourcedevelopment">Open Source Development</a></li>
                                <li><a href="/programs/bootcamp">Bootcamps</a></li>
                                <li>
                                    <a href="#">Programming Tutorials</a>
                                    <ul>
                                        <li><a href="#">React Application</a></li>
                                        <li><a href="#">Clojure Script</a></li>
                                        <li><a href="#">Python</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a className="icon fa-retweet" href="right-sidebar.html"><span>Donate</span></a></li>
                        <li><a className="icon fa-sitemap" href="no-sidebar.html"><span>Get Involved</span></a></li>
                    </ul>
                </nav>

            </div>
        </div>
    );
}
export default Header;
