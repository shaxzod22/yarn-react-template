import { useRef, useState ,useEffect} from "react";
import axios from "axios"
import CountriesList from "../components/CountriesList"


const HomePage = ()=>{
    let url = `https://restcountries.com/v3.1/all`
    const [countries,setCountries] = useState([])
    const [searchArr,setSearchArr] = useState(null) 
    const [loading,setLoading] = useState(false)
    async function getData(url){
        try{
            setLoading(true)
            const {data} = await axios(url)
            setCountries(data)
        }finally{
            setLoading(false)
        }
    }
    
    useEffect(()=>{
        getData(url)
    },[url])
    
    const inputRef = useRef()
    
    function submit(e){
    
        e.preventDefault()
        let newArr;
        if(inputRef.current.value.trim()){
            newArr = countries.filter((el)=>el?.name.common.toLowerCase().includes(inputRef.current.value.toLowerCase().trim()))
            setSearchArr(newArr)
        }else{
            alert('To`ldirilmadi!')
        }
    }

    if(loading){
        
    }
    
    return(
        <>
        <div className="container">
            <div className="loading">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        <h1 className="heading">Countries</h1>
        <form onSubmit={submit} className="search__form">
        <input ref={inputRef} type="text" placeholder="Search country..." className="search__input" />
        <button className="search__btn">Search</button>
        </form>
        <CountriesList countries={searchArr?searchArr:countries}/>
        </div>
        </>
        )
    }
    
    export default HomePage