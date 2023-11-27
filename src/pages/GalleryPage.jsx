import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import './../components/GalleryPage.css'

const GalleryPage = () => {
    const {userId} = useParams()
    const [loading,setLoading] = useState(false)
    const [gallery,setGallery]= useState([])
    useEffect(()=>{
async function getGallery(){
    try{
        setLoading(true)
        const {data} = await axios(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        setGallery(data)

    }finally{
        setLoading(false)
    }
}
getGallery()
    },[userId])

    if(loading){
        return(
            <div className="loading"><span className="loader"></span></div>
            )
        }
       
  return (
    <div>
        <h1 className="heading">Gallery</h1>
     <ul className="gallery__list">
{gallery.map((el)=>(
    <li key={el.id} className="gallery__item">
        <p className="gallery__inner__title">{el.title}</p>
        <Link to={`/notgiven`} className="gallery__btn btn">Photos</Link>
    </li>
))}
     </ul>
    </div>
  )
}

export default GalleryPage
