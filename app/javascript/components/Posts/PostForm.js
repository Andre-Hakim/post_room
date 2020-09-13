import React, { useState, useEffect } from "react";
import './PostForm.scss';

const PostForm = (props) => {
    return (
      <div className="Post-Form">
        <form className="formCard" onSubmit={props.handleSubmit}>
          <input
            type="text"
            placeholder="Post Title"
            id="title-Input"
            onChange={props.handleChange}
            name="title"
            value={props.postprepare.title || ""}
          ></input>
          <textarea
            type="text"
            name="description"
            placeholder="Post Description"
            id="description-Input"
            onChange={props.handleChange}
            value={props.postprepare.description || ""}
          ></textarea>
          <input
            type="button"
            value="Post"
            text="Post"
            id="butt"
            type="submit"
          ></input>
        </form>
      </div>
    );
}

export default PostForm