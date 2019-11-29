import React from "react";
import VideoLink from "../../assets/batman.mp4";
import ImgAvatar from "../../assets/profile.png";
import Comments from "./Comments";

function BodyDisplayVideo() {
    return (
        <div className="right_sec_container">
            <video src={VideoLink} controls></video>

            <div class="media-info">
                <div class="title">
                    <h1>Batman 75th Anniversary Animated</h1>
                    <div class="views">
                        {/* <span><img src="./eye.png" alt=""/></span> */}
                        <span>6,999,550 views</span>
                    </div>
                </div>
                
            </div>

            <div className="comments">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <Comments />
                <Comments />
                <Comments />
                <Comments />
                <Comments />
                <Comments />
                <Comments />
                <Comments />
            </div>
        </div>
    )
}


export default BodyDisplayVideo;