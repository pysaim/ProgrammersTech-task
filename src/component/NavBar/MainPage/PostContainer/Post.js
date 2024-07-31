import React, { Component } from 'react';
import "./PostContainer.css";
import { Avatar, Paper } from '@mui/material';
import like from "../../../../images/like.png";
import likebutton from "../../../../images/likebutton.png";
import commentbutton from "../../../../images/comment.png";
import sharebutton from "../../../../images/share.png";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            comments: [],
            comment: '',
            commentAvatar: "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-1/313357348_186013473990742_3550243118844255681_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEiEWkqNWM9QUWJ64O59eGHraW4cRDvpEGtpbhxEO-kQRBK1DK37L4mABcc9s06auAjcJERMDYnWbKJGzWqOGMA&_nc_ohc=ppjJ221wk-kQ7kNvgFiSK1k&_nc_ht=scontent-cdg4-2.xx&oh=00_AYDL-yjRfcZOd0HLFXcPo07BZh3LiozSVd1gVgvR_Q12Vw&oe=66AD0251"
        };
    }

    handleLike = () => {
        this.setState(prevState => ({ liked: !prevState.liked }));
    }

    handleCommentChange = (e) => {
        this.setState({ comment: e.target.value });
    }

    handleCommentSubmit = (e) => {
        e.preventDefault();
        const { comments, comment, commentAvatar } = this.state;
        if (comment) {
            const newComment = { text: comment, avatar: commentAvatar };
            this.setState({ 
                comments: [...comments, newComment],
                comment: ''
            });
        }
    }

    render() {
        const { post } = this.props;
        const { liked, comments, comment } = this.state;

        if (!post) {
            return null;
        }

        return (
            <div>
                <Paper className='post__container'>
                    {/* header */}
                    <div className='post__header'>
                        <div className='post__header_img'>
                            <Avatar src={post.image} className='post_img' />
                        </div>
                        <div className='post__header_text'>
                            {post.name}
                        </div>
                    </div>

                    {/* description */}
                    <div className='post__description'>
                        {post.body}
                    </div>

                    {/* post image */}
                    {post.postImage && (
                        <div className='post__image'>
                            <img src={post.postImage} alt='Post' className='post__postImage' />
                        </div>
                    )}

                    {/* like count */}
                    <div className='post__likeCountContiner'>
                        <div className='post__like'>
                            <img className='post__img' src={like} />
                        </div>
                        <div className='post__likecount'>
                            {liked ? 1 : 0}
                        </div>
                    </div>

                    {/* like share box */}
                    <div className='post__likeShare'>
                        <div className='post__tab' onClick={this.handleLike}>
                            <div className='post__tabfirst'>
                                <img className='post__tabimg' src={likebutton} />
                            </div>
                            <div className='post__tabtext'>
                                {liked ? 'Liked' : 'Like'}
                            </div>
                        </div>

                        <div className='post__tab'>
                            <div className='post__tabfirst'>
                                <img className='post__tabimg' src={commentbutton} />
                            </div>
                            <div className='post__tabtext'>
                                Comment
                            </div>
                        </div>

                        <div className='post__tab'>
                            <div className='post__tabfirst'>
                                <img className='post__tabimg' src={sharebutton} />
                            </div>
                            <div className='post__tabtext'>
                                Share
                            </div>
                        </div>
                    </div>

                    {/* comment box */}
                    <div className='upload__comment'>
                        <div className='upload__top'>
                            <div>
                                <Avatar src="https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-1/313357348_186013473990742_3550243118844255681_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEiEWkqNWM9QUWJ64O59eGHraW4cRDvpEGtpbhxEO-kQRBK1DK37L4mABcc9s06auAjcJERMDYnWbKJGzWqOGMA&_nc_ohc=ppjJ221wk-kQ7kNvgFiSK1k&_nc_ht=scontent-cdg4-2.xx&oh=00_AYDL-yjRfcZOd0HLFXcPo07BZh3LiozSVd1gVgvR_Q12Vw&oe=66AD0251" className='upload__img' />
                            </div>
                            <div>
                                <form onSubmit={this.handleCommentSubmit}>
                                    <input
                                        className='upload__box'
                                        placeholder="Comment as Saim Manan"
                                        type='text'
                                        value={comment}
                                        onChange={this.handleCommentChange}
                                    />
                                </form>
                            </div>
                        </div>
                        <div className='comments__section'>
                            {comments.map((comment, index) => (
                                <div key={index} className='comment'>
                                    <Avatar src={comment.avatar} className='comment__avatar' />
                                    <span className='comment__text'>{comment.text}</span>
                                </div>
                            ))}
                        </div>
                        <div className='comment__count'>
                            {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default Post;
