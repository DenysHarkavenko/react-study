import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useFetching } from "../components/hooks/useFetching"
import PostService from "../API/PostService"
import { Loader } from "../components/UI/loader/Loader"

export function PostIdPage() {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return(
        <div>
            <h1 style={{marginTop:'15px'}}>Post page with ID {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h1 style={{marginTop: '30px'}}>Comments</h1>
            {isComLoading
                ? <Loader/>
                : <div className="comments__block">
                    {comments.map(comm =>
                        <div className="comments__block-item">
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
        
    )
}