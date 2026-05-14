import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const api = import.meta.env.VITE_BACKEND_API_URL;

const Feed = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const navigate = useNavigate();


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${api}/posts`)
        const fetchedPosts = Array.isArray(res.data.Posts) ? res.data.Posts : []

        setPosts(fetchedPosts)
      } catch (err) {
        console.error('Failed to load posts:', err)
        setError('Failed to load posts from the backend.')
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
      ) : !error ? (
        <h1>No posts available</h1>
      ) : null
    }
  
  </section>
  <div className="bottom-bar">
    <button className='add-post' onClick={() => navigate("/create-post")}>
      +
    </button>
  </div>
  </>
)
}

export default Feed
