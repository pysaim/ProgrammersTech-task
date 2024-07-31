import React, { Component } from 'react';
import "./NavBar.css";
import Grid from '@mui/material/Grid';
import fblogo from '../../images/logo.png';
import home from "../../images/home.svg";
import page from "../../images/pages.svg";
import watch from "../../images/watch.svg";
import market from "../../images/market.svg";
import group from "../../images/groups.svg";
import upload from '../../images/upload.svg'; 
import messageIcon from "../../images/messenger.svg"; 
import bellIcon from "../../images/notification.svg"; 
import dropdownIcon from "../../images/arrow.svg"; 
import { Avatar } from '@mui/material';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Grid container className='navbar_main'>
                    <Grid item xs={3}>
                        <div className='navbar_leftbar'>
                            <img className='navbar_logo' src={fblogo} width="35px" />
                            <input className='navbar_search' type='text' placeholder='Search Facebook' />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='navbar_container'>
                            <div className='navbar_tabs active'>
                                <img src={home} height="35px" width="35px" />
                            </div>
                            <div className='navbar_tabs'>
                                <img src={page} height="35px" width="35px" />
                            </div>
                            <div className='navbar_tabs'>
                                <img src={watch} height="35px" width="35px" />
                            </div>
                            <div className='navbar_tabs'>
                                <img src={market} height="35px" width="35px" />
                            </div>
                            <div className='navbar_tabs'>
                                <img src={group} height="35px" width="35px" />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className='navbar_right'>
                            <div className='navbar_righttab'>
                                <Avatar className='navbar_rightimg' src='https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-1/313357348_186013473990742_3550243118844255681_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEiEWkqNWM9QUWJ64O59eGHraW4cRDvpEGtpbhxEO-kQRBK1DK37L4mABcc9s06auAjcJERMDYnWbKJGzWqOGMA&_nc_ohc=ppjJ221wk-kQ7kNvgHJd0js&_nc_ht=scontent-cdg4-2.xx&oh=00_AYDq_2nf6d-WEyK9OlYxKkQzYsNhzQOJivvSH4-oUYZPag&oe=66ABE911' />
                                <div className="navbar_profilename">Saim</div>
                                <div className='navbar_backicon'>
                                    <div className='navbar_icons'>
                                        <div className='navbar_icon'>
                                            <img src={upload} alt='Upload' /> 
                                        </div>
                                        <div className='navbar_icon'>
                                            <img src={messageIcon} alt='Messages' />
                                        </div>
                                        <div className='navbar_icon_with_badge'>
                                            <div className='navbar_icon'>
                                                <img src={bellIcon} alt='Notifications' />
                                            </div>
                                            {/* <span className='navbar_badge'>2</span> */}
                                        </div>
                                        <div className='navbar_icon'>
                                            <img src={dropdownIcon} alt='Dropdown' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default NavBar;
