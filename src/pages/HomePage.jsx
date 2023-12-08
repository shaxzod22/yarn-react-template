import { useEffect } from "react"
import { useState } from "react"

import { Link } from "react-router-dom"
import axios from "axios"

const HomePage = () => {
    const urlAll = `https://api.spaceflightnewsapi.net/v3/articles`
    const [info,setInfo] = useState([])
    
    
    useEffect(()=>{
        async function getData(url){
            try{
                const res = await axios(url)
                
                setInfo(res.data)
            }catch{
                console.log('a');
            }
        }
        getData(urlAll)
        
    },[urlAll])
    
    console.log(info);
    return (
        <div className="container">
        <h1 className="heading">News</h1>
        
        <Link to='/jbsjb' >hju</Link>
        </div>
        )
    }
    
    export default HomePage
    