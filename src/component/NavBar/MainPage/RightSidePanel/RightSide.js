import React, { Component } from 'react'
import "./RightSide.css";
import ImageLayout from '../ImageLayout';

class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
          
    }

    getData = () => {
        let jsondata = [ 
            {
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAggMYud1XfeQP-eWzrHOY2OEvtT3QQyaEdg&s",
                "text": "BiLal"
            },
            {
                "image": "https://randomuser.me/api/portraits/thumb/women/1.jpg",
                "text": "Furqan Shk"
            },
            {
                "image": "https://randomuser.me/api/portraits/thumb/men/2.jpg", 
                "text": "Rabia zadi"
            },
            {
                "image": "https://randomuser.me/api/portraits/thumb/women/2.jpg", 
                "text": "Umaur Razzs"
            },
            {
                "image": "https://randomuser.me/api/portraits/thumb/men/3.jpg", 
                "text": "kidz"
            },
            {
                "image": "https://randomuser.me/api/portraits/thumb/men/1.jpg", 
                "text": "Prince B"
            },
            {
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRazGKny1CSlH3XZGzdceONvBwSZqNVKklLnA&s", 
                "text": "Rao Ali"
            },
            {
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQLwDqDwd2JfzifvfBTFT8I7iKFFevcedYg&s", 
                "text": "Ijaz"
            },
            {
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAggMYud1XfeQP-eWzrHOY2OEvtT3QQyaEdg&s", 
                "text": "saqib"
            }
        ];
        this.setState({ data: jsondata });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div className='rightside__container'>
                <div className='rightside__header'>
                    Contacts
                </div>

                <div className='rightside__content'>


                    {
                        this.state.data.map((item, index) => (
                            <ImageLayout key={index} image={item.image} text={item.text} />
                        ))
                    }

                </div>
            </div>
        );
    }
}

export default RightSide;