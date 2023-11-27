import { useState } from "react"
import { Fragment, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import './../components/TodosPage.css'

const TodosPage = () => {
    const {userId} = useParams()
    const [loading,setLoading] = useState(false)
    const [userInfo,setUserInfo]= useState([])
    useEffect(()=>{
        async function getUserData(){
            try {
                setLoading(true)
                const {data} = await axios(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
                setUserInfo(data)
            }finally{
                setLoading(false)
            }
        }
        getUserData()
    },[userId])
    console.log(userInfo);
    
    if(loading){
        return(
            <div className="loading"><span className="loader"></span></div>
            )
        }
        return (
            <Fragment>
            <div className="container">
            <h1 className="heading">Todos</h1>
            <ul className="todos__list">
            {userInfo.map((el,i)=>(
                <li key={el.id} className="todos__item">
                <h3 className="todos__text">{i+1}. {el.title}</h3>
                <p className="todos__status">{el.completed?'✅':'❌'}</p>
                </li>
                ))}
                </ul>
                </div>
                </Fragment>
                )
            }
            
            export default TodosPage
            