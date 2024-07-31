import React, { Component } from 'react'
import "./UploadSection.css"
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import live from "../../../../images/video.png";
import image from "../../../../images/image.png";
import feeling from "../../../../images/feelings.png";



class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Paper className="Upload__container" sx={{

                    borderRadius: '10px',

                }} >

                    <div className='upload__top'>
                        <div>
                            <Avatar src='https://scontent.flhe2-4.fna.fbcdn.net/v/t39.30808-1/313357348_186013473990742_3550243118844255681_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEiEWkqNWM9QUWJ64O59eGHraW4cRDvpEGtpbhxEO-kQRBK1DK37L4mABcc9s06auAjcJERMDYnWbKJGzWqOGMA&_nc_ohc=1ww6XaU9Nz0Q7kNvgEDi80J&_nc_ht=scontent.flhe2-4.fna&oh=00_AYAzP0y4yxfCysuR6fVzeJ40qfrk22np72t2MM_LG2HmDA&oe=66AA9791' className='upload__img' />
                        </div>

                        <div>
                            <input className='upload__box' placeholder="What's on your mind?" type='text' />
                        </div>
                    </div>


                    <div className='upload__bottom'>

                        <div className='upload__tabs'>
                            <img src={live} width="35px" />
                            <div className='upload__text'>Live Video</div>
                        </div>

                        <div className='upload__tabs'>
                            <img src={image} width="35px" />
                            <div className='upload__text'>Photo/Video</div>
                        </div>

                        <div className='upload__tabs'>
                            <img src={feeling} width="35px" />
                            <div className='upload__text'>Feeling/Activity</div>
                        </div>

                    </div>
                </Paper>

            </div>
        );
    }
}

export default UploadSection;