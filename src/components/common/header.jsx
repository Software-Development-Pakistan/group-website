import React from 'react';
import * as HeaderData from '../../data/header.js';

const Header = () => {
    const { navigationLinks } = HeaderData;
    return (
        <div id="header-wrapper">
            <div id="header" className="container">
                <h1 id="logo"><a href="index.html">Strongly Typed</a></h1>
                <p>A responsive HTML5 site template. Manufactured by HTML5 UP.</p>
                <nav id="nav">
                    <ul>
                        <li><a className="icon fa-home" href="/"><span>{navigationLinks.home}</span></a></li>
                        <li><a className="icon fa-home" href="/about"><span>{navigationLinks.about}</span></a></li>
                        <li><a className="icon fa-retweet" href="right-sidebar.html"><span>Right Sidebar</span></a></li>
                        <li><a className="icon fa-sitemap" href="no-sidebar.html"><span>No Sidebar</span></a></li>
                    </ul>
                </nav>

            </div>
        </div>
    );
}
export default Header;
