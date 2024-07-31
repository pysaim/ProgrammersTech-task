import React, { Component } from 'react';
import "./Mainpage.css";
import LeftSide from './LeftSidePanel/LeftSide';
import StatusBar from './StatusBar/StatusBar';
import UploadSection from './UploadSection/UploadSection';
import PostContainer from './PostContainer/PostContainer';
import RightSide from './RightSidePanel/RightSide';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='mainpage_container'>
                <div className='gridContainer'>
                    <div className='leftSide'>
                        <LeftSide />
                    </div>

                    <div className='middleContainer'>
                        <StatusBar />
                        <UploadSection />
                        <PostContainer />
                    </div>

                    <div className='rightSide'>
                        <RightSide/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;
