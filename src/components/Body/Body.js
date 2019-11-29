import React from "react";
import "./body.css";
import BodyListOfVideos from "./BodyListOfVideos";
import BodyDisplayVideo from "./BodyDisplayVideo";

function Body() {
    return (
        <center>
            <div className="main_body_container">

                <BodyDisplayVideo />
                <BodyListOfVideos />

            </div>
        </center>
    )
}

export default Body;