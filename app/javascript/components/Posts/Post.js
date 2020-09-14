import { checkPropTypes } from "prop-types";
import React, {Fragment} from "react";
import './Post.scss'

const Post = (props) => {    

    return (
      <div className="post-Container">
        <input
          type="button"
          className="delete-post-button"
          value="x"
          onClick={() => props.handleremoveItem(props.post)}
        />
        <h3>{props.post.title}</h3>
        <p>{props.post.description}</p>
      </div>
    );
}

export default Post