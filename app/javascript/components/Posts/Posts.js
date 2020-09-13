import React, { useState, useEffect}from 'react'
import axios from 'axios'
import IndividualPost from './Post'
import PostForm from './PostForm'
import "./Posts.scss";


const Post = () => {
    const [posts, setPosts] = useState([])
    const [postprepare, setPostPrepare] = useState([])
    const [idOfPost, setIdOfPost] = useState([])
    useEffect(() => {
       
        axios
            .get("/api/v1/posts/index")
            .then((response) => {
                setPosts(response.data)
                
            })
            .catch((response) => console.log(response));
    }, [posts.length])

    const getPosts = posts.map((post) => (
      <IndividualPost
        key={post.id}
        post={post}
      ></IndividualPost>
    ));
   
    
    const handleChange = (arg) => {
         arg.preventDefault();
       setPostPrepare(
         Object.assign({}, postprepare, { [arg.target.name]: arg.target.value })
       );
       
    }

      const handleSubmit = (arg) => {
        arg.preventDefault();
        

        const csrfToken = document.querySelector("[name=csrf-token]").content;
        axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
        axios.defaults.headers["content-type"] = "application/json";
        
        axios
          .get("/api/v1/posts/create", {
            "title": postprepare.title,
            "description": postprepare.description,
            "posty_id": "22"
          })
          .then((afterPost) => {
            setPosts({ ...afterPost });
            setReview({ title: "", description: "" });
          })
          .catch((res) => {
            console.log(res);
          });
      };


    return (
      <div className="displayFlex">
        <div className="left-column">
          <PostForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            postprepare={postprepare}

          />
        </div>

        <div className="right-column">{getPosts}</div>
      </div>
    );
    
}

export default Post