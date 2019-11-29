import React from "react";
import VideoLink from "../../assets/sample.mp4";
import ImgAvatar from "../../assets/profile.png";

function BodyDisplayVideo() {
    return (
        <div className="right_sec_container">
            <video src={VideoLink} controls></video>

            <div class="media-info">
                <div class="title">
                    <h1>The Amazing Video of a Rabbit</h1>
                    <div class="views">
                        {/* <span><img src="./eye.png" alt=""/></span> */}
                        <span>6,500,550 views</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}


export default BodyDisplayVideo;