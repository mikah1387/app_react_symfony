import React from 'react'

export default function Post({post}) {
  return (
           <div className="post">
         <div className="image">
            <img src={post.image} alt="" />
         </div>
        <h1> {post.title}</h1>
        <h2>{post.category}</h2>
        <p> { post.description.substring(0, 100)}...</p>
        <h3> {post.price} €</h3>
        
    </div>
  )
}
