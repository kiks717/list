import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Posts = () => {
    const [comment,setComment] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/comments')
        .then(res => res.json())
        .then(data => setComment(data))
    },[comment])
  return (
    <div>
      
    </div>
  )
}

export default Posts
