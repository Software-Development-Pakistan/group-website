import React from 'react';
import ContentWrapper from './contentWrapper';
import SideBarWrapper from './sidebarWrapper';

const MainWrapper = () => {
    return (
        <div id="main-wrapper">
            <div id="main" class="container">
                <div class="row">
                    <ContentWrapper/>
                    <SideBarWrapper/>
                </div>
            </div>
        </div>
    )
}

export default MainWrapper;
