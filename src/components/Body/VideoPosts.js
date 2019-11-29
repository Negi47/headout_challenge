import React from "react";
import PostImg from "../../assets/post.jpg"

function VideoPosts() {
    return (
        <div className="video_posts">
            <img src={PostImg} />
            <div className="post_details">
                <h5>Batman begins</h5>
                <p>DC Movies</p>
                <p>123 Views</p>
            </div>
        </div>
    )
}

export default VideoPosts;