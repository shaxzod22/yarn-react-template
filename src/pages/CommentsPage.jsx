import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './../components/CommentsPage.css'

const CommentsPage = () => {
  const {userId} = useParams()
  const [loading,setLoading] = useState(false)
  const [comments,setComments] = useState([])
  useEffect(()=>{
async function getComments(){
try{
  setLoading(true)
  const {data} = await axios(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
  setComments(data)
}finally{
  setLoading(false)
}
}
getComments()
  },[userId])

  if(loading){
    return(
        <div className="loading"><span className="loader"></span></div>
        )
    }
  return (
    <div className="container">
      <h1 className="heading">Comments</h1>
      <ul className="comments__list">
      {comments.map(el=>(
        <li key={el.id} className="comments__item">
          <p className="comments__email">{el.email}</p>
          <p className="comments__name">{el.name}</p>
          <p className="comments__overview">{el.body}</p>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default CommentsPage
