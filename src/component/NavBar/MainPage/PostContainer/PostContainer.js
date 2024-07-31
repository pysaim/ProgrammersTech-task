import React, { Component } from 'react';
import "./PostContainer.css";
import Post from './Post';

const names = ["Ali Khan", "Sara Ahmed", "Zainab Abbas", "Usman Khalid", "Fatima Noor"];
const images = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg"
];
const avatars = [
    "https://randomuser.me/api/portraits/thumb/men/1.jpg",
    "https://randomuser.me/api/portraits/thumb/women/1.jpg",
    "https://randomuser.me/api/portraits/thumb/men/2.jpg",
    "https://randomuser.me/api/portraits/thumb/women/2.jpg",
    "https://randomuser.me/api/portraits/thumb/men/3.jpg"
];
const postImages = [
    "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1495001258031-d1b407bc1776?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts: [],
            page: 1,
            loading: false,
            error: null
        };
    }

    componentDidMount() {
        this.fetchPosts();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    fetchPosts = async () => {
        const { page, posts } = this.state;
        this.setState({ loading: true });
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const updatedData = data.map((post, index) => ({
                ...post,
                name: names[Math.floor(Math.random() * names.length)],
                image: avatars[Math.floor(Math.random() * avatars.length)],
                postImage: index % 2 === 0 ? postImages[Math.floor(Math.random() * postImages.length)] : null // Add image to every other post
            }));
            this.setState({ 
                posts: [...posts, ...updatedData],
                loading: false 
            });
        } catch (error) {
            this.setState({ loading: false, error: error.message });
        }
    }

    handleScroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.state.loading) {
            this.setState(prevState => ({ page: prevState.page + 1 }), this.fetchPosts);
        }
    }

    render() {
        const { posts, loading, error } = this.state;
        return (
            <div>
                {posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
                {loading && <div>Loading...</div>}
                {error && <div style={{ color: 'red' }}>Error: {error}</div>}
            </div>
        );
    }
}

export default PostContainer;
