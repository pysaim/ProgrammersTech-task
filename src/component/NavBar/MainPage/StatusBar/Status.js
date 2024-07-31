import React, { Component } from 'react';
import './StatusBar.css';
import Paper from '@mui/material/Paper';
import uploadIcon from "../../../../images/upload.png";

const defaultProfileImage = "https://scontent.flhe2-4.fna.fbcdn.net/v/t39.30808-6/313357348_186013473990742_3550243118844255681_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEiEWkqNWM9QUWJ64O59eGHraW4cRDvpEGtpbhxEO-kQRBK1DK37L4mABcc9s06auAjcJERMDYnWbKJGzWqOGMA&_nc_ohc=ppjJ221wk-kQ7kNvgHHlzaN&_nc_zt=23&_nc_ht=scontent.flhe2-4.fna&gid=AmIhwkz_HX2K6c_xSuYynjY&oh=00_AYBP1ip1z0Sx1tG_Dw_f9drs6eYZ64zAT6hM10MiM5PczA&oe=66AE7817";

class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUploaded: false,
            imageUrl: ''
        };
    }

    openDialog = (event) => {
        const file = event.target.files[0];
        if (file) {
            this.setState({
                imageUploaded: true,
                imageUrl: URL.createObjectURL(file)
            });
        }
    }

    render() {
        return (
            <div>
                {this.props.uploader === "true" ? (
                    <Paper className='statusbar__status' sx={{ borderRadius: '10px' }}>
                        <label htmlFor="file-upload" className="upload__tabs">
                            <img src={uploadIcon} className='upload__icon' alt="upload icon"/>
                        </label>
                        <input type="file" id="file-upload" onChange={this.openDialog} />
                    </Paper>
                ) : (
                    <Paper className='statusbar__status' sx={{ borderRadius: '10px' }}>
                        <img src={this.state.imageUploaded ? this.state.imageUrl : defaultProfileImage} className='status__image' alt="status" />
                    </Paper>
                )}
            </div>
        );
    }
}

export default Status;
