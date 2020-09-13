import React from "react";
import './Post.scss'

const Post = (props) => {    
    return(
        <div className="post-Container">
            <h3>{props.post.title}</h3>
            <p>{props.post.description}</p>
        </div>
    );
}

export default Post