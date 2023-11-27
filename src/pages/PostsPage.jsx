import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import './../components/PostPage.css'

const PostsPage = () => {
    const {userId} = useParams()
    const [posts,setPosts]= useState([])
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        async function getPosts(){
            try{
                setLoading(true)
                const {data} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
                setPosts(data)
            }finally{
                setLoading(false)
            }
        }
        getPosts()
    },[userId])
  

    if(loading){
        return(
            <div className="loading"><span className="loader"></span></div>
            )
        }
        return (
            <div className="container">
            <h1 className="heading">Posts</h1>
            <ul className="posts__list">
            {posts.map((el,i)=>(
                <li key={el.id} className="posts__item">
                <h4 className="posts__title">{i+1}. {el.title}</h4>
                <p className="posts__overview">{el.body}</p>
                <Link className="btn posts__btn" to={`/posts/comments/${i+1}`}>Comments</Link>
                </li>
                ))}
                </ul>
                </div>
                )
            }
            
            export default PostsPage
            