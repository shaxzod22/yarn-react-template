import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

const HomePage = () => {
    const urlAll = `https://api.spaceflightnewsapi.net/v3/articles`
const [info,setInfo] = useState([])
    async function getData(url){
        try{
            const {data} = await axios(url)
            setInfo(data)
        }catch{
            console.log('a');
        }
    }

    useEffect(()=>{
getData(urlAll)

    },[])
 
  return (
    <div className="container">
      <h1 className="heading">News</h1>

      <ul className="news__list">
        {info.map((el,index)=>(
            <li key={index} className="news__item">
                <Link to='/'>a</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
