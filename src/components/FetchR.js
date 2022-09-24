import React, { useEffect, useState }from 'react'
import { useSearchParams } from 'react-router-dom'
import { PostDiv,CustomButton } from './UseFetchStyles'
const UseFetch = () => {
    const [posts,setPosts] = useState([])
    const [count, setCount] = React.useState(1)
    const [show,setShow] = useState(false)
    const  [seacrhParams,setSearchParams] =  useSearchParams()
      useEffect(() => {
        fetch(`https://dummyjson.com/posts/${count}`)
        .then(res => res.json())
        .then(data => setPosts(data))
      }
    ,[count])
      // let postsId= seacrhParams.get('./posts/id')

  return (
            <PostDiv>
            <input 
            type="number"
            onChange={(event) => {
              let posts = event.target.value
              if (posts) {
                setSearchParams({ posts })
              } else {
                setSearchParams({})
              }
              console.log(posts)
            }}
            value={seacrhParams.get('posts')}
            placeholder="random number "
            />
               <h2>Post no.{count} <br/>from {posts.userId} user </h2>
            <CustomButton onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Post</CustomButton>
            {/* <pre>{JSON.stringify(posts, null, 2)}</pre>  */}
            <PostDiv key={posts.id}>
              <h4>{posts.title}</h4>
              <PostDiv>
                {show ? <p>{posts.body}</p>: null}
                <CustomButton
                 onClick={() => {
                  setShow(true)
                }}>
                 Show more info
                </CustomButton>
                <CustomButton 
                onClick={() => {
                  setShow(false)
                }}>
                  Hide
                </CustomButton>
              </PostDiv>
            </PostDiv> 
      
           
        </PostDiv>
  )
}

export default UseFetch