import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Feed = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const navigate = useNavigate();


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/posts')
        const fetchedPosts = Array.isArray(res.data.Posts)? res.data.Posts: []

        setPosts(fetchedPosts)
      } catch (err) {
        console.error('Failed to load posts:', err)
        setError('Failed to load posts. Check that the backend is running on port 3000.')
      }
    }

    fetchPosts()
  }, [])



  return (
    <>
  <section className='feed-section'>
    <h1>Feed</h1>

    {error && <p>{error}</p>}

    {
      posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id?.$oid || post._id} className='post-card'>
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <h1>No posts available</h1>
      )
    }
  
  </section>
  <div className="bottom-bar">
    <button className='add-post' onClick={() => navigate("/create-post")}>
      <FaPlus size={18} color="black"></FaPlus>
    </button>
  </div>
  </>
)
}

export default Feed
