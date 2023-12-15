import React, { useState } from "react"
import { MyButton } from "./UI/button/MyButton"
import { MyInput } from "./UI/input/MyInput"

export function PostForm({create}){
    const [post, setPost] = useState({title: '', body: ''})

    function addNewPost(e) {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'', body:''}) // Додаєм заголовок і зміст посту
    }

    return(
        <form action="">
            <MyInput 
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})} 
                type="text" 
                placeholder='Post title'/>
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text" 
                placeholder='Post content'/>
            <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
    )
}