import React from "react";
import ProfileImg from "../../assets/profile.png";

function Comments() {
    return (
        <div class="card">
                <div class="badge">
                    <img src={ProfileImg} alt=""/>
                    <span class="usn">
                        Batman
                    </span>                            
                </div>
                <p>
                   some comments by user 
                </p>
        </div>
    )
}

export default Comments;