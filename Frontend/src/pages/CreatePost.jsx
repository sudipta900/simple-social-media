import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function CreatePost() {

  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    try {
      const res = await axios.post('http://localhost:3000/create-post', formData).then ((res)=>{
        navigate('/feed')
      })
      console.log(res)
    } catch (err) {
      console.error(err)
    }

  }

  return (
    <section className='create-post-section'>
      
      <form onSubmit={handleSubmit}>
        <h1>Create post</h1>
        <input type="file" name='image' accept='image/*' />
        <input type="text" name='caption' accept='text/*' placeholder='enter caption' />
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default CreatePost
