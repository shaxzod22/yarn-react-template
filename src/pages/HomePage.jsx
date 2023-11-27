import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import './../components/HomePage.css'
import Header from "../components/Header"

const HomePage = () => {
  const [user,setUser]=useState([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    async function getData(){
      try{
        setLoading(true)
        const {data}= await axios(`https://jsonplaceholder.typicode.com/users`)
      setUser(data)
      }finally{
        setLoading(false)
      }
      
    }
    getData()
  },[])

  if(loading){
    return(
        <div className="loading"><span className="loader"></span></div>
        )
    }
  return (
    <>
    <Header/>
      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
     </div>
    <div className="container">
    <ul className="users__list">
    {user.map((el,i)=>(
      <li className="user__item" key={el.id}>
      <h1 className="user__name">{el.name}</h1>
      <h2 className="user__username">{el.username}</h2>
      <p className="email__text info">Email: <a href={`mailto:${el.email}`}>{el.email}</a></p>
      <p className="website__text info">Website: <a href={`https://www.${el.website}`}>{el.website}</a></p>
      <p className="address__text info">Address: <span>{el.address.street}, {el.address.city}</span></p>
      <p className="phone__text info">Phone: <a  href={`tel:${el.phone}`}>{el.phone}</a></p>

      <div className="btn__box">
        <Link to={`/todos/${i+1}`} className="todos__btn btn">Todos</Link>
        <Link to={`/posts/${i+1}`} className="btn">Posts</Link>
        <Link to={`/gallery/${i+1}`} className="btn">Gallery</Link>
      </div>
      </li>
      ))}
      </ul>
      </div>
      </>
      
      )
    }
    
    export default HomePage
    