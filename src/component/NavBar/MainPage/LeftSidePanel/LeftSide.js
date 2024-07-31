import React, { Component } from 'react';
import './LeftSide.css';
import ImageLayout from '../ImageLayout';
import covid from '../../../../images/covid.png';
import groups from '../../../../images/groups.png';
import memories from '../../../../images/memories.png';
import messengerkids from '../../../../images/messengerkids.png';
import ads from '../../../../images/ads.png';
import admanager from '../../../../images/admanager.png';
import blood from '../../../../images/blood.png';
import business from '../../../../images/business.png';

class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
        };
    }

    getData = () => {
        let jsondata = [ 
            {
                "image": "https://scontent.flhe2-4.fna.fbcdn.net/v/t39.30808-1/313357348_186013473990742_3550243118844255681_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=6738e8&_nc_eui2=AeEiEWkqNWM9QUWJ64O59eGHraW4cRDvpEGtpbhxEO-kQRBK1DK37L4mABcc9s06auAjcJERMDYnWbKJGzWqOGMA&_nc_ohc=1ww6XaU9Nz0Q7kNvgEDi80J&_nc_ht=scontent.flhe2-4.fna&oh=00_AYCm7mPwmuvnmRxXE8OSpLeNF0DZwXSjD2mHgX43XgwDbw&oe=66AA5F51",
                "text": "Saim Manan"
            },
            {
                "image": covid,
                "text": "COVID-19 Information Centre"
            },
            {
                "image": groups, 
                "text": "Friends"
            },
            {
                "image": memories, 
                "text": "Memories"
            },
            {
                "image": messengerkids, 
                "text": "Messenger Kids"
            },
            {
                "image": ads, 
                "text": "Ad Center"
            },
            {
                "image": admanager, 
                "text": "Ads Manager"
            },
            {
                "image": blood, 
                "text": "Blood Donation"
            },
            {
                "image": business, 
                "text": "Busines Manager"
            }
        ];
        this.setState({ data: jsondata });
    }

    componentDidMount() {
        this.getData();
    }

    render() { 
        return ( 
            <div>
                {this.state.data.map((item, index) => (
                    <ImageLayout key={index} image={item.image} text={item.text} />
                ))}
            </div>
        );
    }
}

export default LeftSide;
