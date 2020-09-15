import React, { useState, useEffect}from 'react'
import axios from 'axios'
import IndividualPost from './Post'
import PostForm from './PostForm'
import "./Posts.scss";


const Post = () => {
    let [posts, setPosts] = useState([])
    const [postprepare, setPostPrepare] = useState([])
    let [postyId, setPostId] = useState([])
    useEffect(() => {
       
        axios
            .get("/api/v1/posts/index")
            .then((response) => {
                setPosts(response.data)
                
            })
            .catch((response) => console.log(response));
    }, [posts.length])
  
   
    
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
          .post("/api/v1/posts/create", postprepare)
          .then((afterPost) => {
            const included = [...posts, afterPost.data];
            // debugger
            // console.log(included);
            // console.log(afterPost);
            // debugger
            setPosts(included)
            setPostPrepare(Object.assign({}, postprepare, { title: "", description: "" }));
          })
          .catch((res) => {
            console.log(res);
          });
      };

      const handleremoveItem = (id) => {
        
        const csrfToken = document.querySelector("[name=csrf-token]").content;
        axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
        axios.defaults.headers["content-type"] = "application/json";
        axios.post("/api/v1/posts/destroy/", {id}).then((afterDelete) => {
          const newPosts = [...afterDelete.data.data]
          setPosts(newPosts);
        });
      }
    const getPosts = posts.map((post) => (
      <IndividualPost
        key={post.id}
        post={post}
        setPostId={setPostId}
        handleremoveItem={handleremoveItem}
      ></IndividualPost>
    ));
    return (
      <div className="displayFlex">
        <div className="left-column">
          <PostForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            postprepare={postprepare}
          />
        </div>
        <div className="right-column">
            {getPosts}
        </div>
      </div>
    );
    
}

export default Post