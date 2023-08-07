import React from 'react'
import useFetch from '../hooks/useFetch';
import './Home.css'

function Home () {
    //blogs
    let url='http://localhost:3001/blogs'
    let {data :blogs ,loading , error} = useFetch(url)
  return (
    <div className='Home'>
      {error && <div>{error}</div>}
      {loading && <div>loading....</div>}
      { blogs && blogs.map(blog => (
        <div key={blog.id} className='card'>
            <h3>{blog.title}</h3>
            <p> posted by - {blog.author}</p>
            <a href="">Read more</a>
        </div>
      ))}
    </div>
  )
}

export default Home
