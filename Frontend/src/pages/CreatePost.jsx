import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const api = import.meta.env.VITE_BACKEND_API_URL

function CreatePost() {
  const [error, setError] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    setError('')
    setIsSubmitting(true)

    try {
      const res = await axios.post(`${api}/create-post`, formData)
      navigate('/')
      console.log(res)
    } catch (err) {
      console.error(err)
      setError(err.response?.data?.message || 'Failed to create post.')
    } finally {
      setIsSubmitting(false)
    }

  }

  return (
    <section className='create-post-section'>
      
      <form onSubmit={handleSubmit}>
        <h1>Create post</h1>
        <input type="file" name='image' accept='image/*' />
        <input type="text" name='caption' accept='text/*' placeholder='enter caption' />
        {error && <p>{error}</p>}
        <button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </section>
  )
}

export default CreatePost
