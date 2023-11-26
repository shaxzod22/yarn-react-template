import { Fragment } from "react"
import { useRef } from "react"
import { useState } from "react"
import User from "../components/contact/User"

const Contact = () => {
    
    const [users,setusers]= useState(JSON.parse(localStorage.getItem('users'))||[])
    let firstNameInputRef = useRef()
    let lastNameInputRef = useRef()
    let phoneInputRef = useRef()
    let selectionRef = useRef()
   
    function submit(e){
        e.preventDefault()
        console.log(firstNameInputRef.current.value.trim());
        let firstname = firstNameInputRef.current.value.trim()
        let lastname = lastNameInputRef.current.value.trim()
        let phoneNumber = phoneInputRef.current.value.trim()
        if(firstname && phoneNumber){
            const newUser = {
                id:new Date().getFullYear(),
                firstname,
                lastname,
                phoneNumber,
                relativeness:selectionRef.current.value,
            }
            let newData = [...users,newUser]
            localStorage.setItem('users',JSON.stringify(newData))
            setusers(newData)
        }else{
            alert('Enter both firstname and phone number')
        }
        
      
        e.target.reset()
    }
    
    function deleteI(id) {
        console.log(id);
        let newData = users.filter((el)=>el.id != id )
        localStorage.setItem('users',JSON.stringify(newData))
        setusers(newData)
    }
    function delAll(){
        setusers([])
        localStorage.clear()
    }
    function edit(id){
        console.log(id);
        
    }
    let renderData = users.map((user,i)=>(
        <User key={i} {...user} editI={edit} deleteI={deleteI}/>
        ))

        
        return (
            <Fragment>
            <div className="container">
            <form onSubmit={submit} className="form">
            <label className="label">
            First name
            <input type="text" ref={firstNameInputRef} className="firstname input" placeholder="First name" />
            </label>
            <label className="label">
            Last name (Optional)
            <input type="text" ref={lastNameInputRef} className="lastname input" placeholder="Last name" />
            </label>
            <label className="label">
            Phone number
            <input ref={phoneInputRef} type="text" className="phone input" placeholder="Phone number" />
            </label>
            <label className="label">
            Choose relationship
            <select ref={selectionRef} defaultValue='none'  className="input selection">
            <option value="none"></option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="relatives">Relatives</option>
            <option value="other">Other</option>
            </select>
            </label>
            <button className="add__btn">Add contact</button>
            </form>
            
            <ul className="navbar__list">
            <li className="navbar__item">All{`(${users.length})`}</li>
            <li onClick={delAll} className="navbar__item navbar__item-active">Delete all</li>
            </ul>
            <div className="users__list">
            {renderData}
            </div>
            </div>
            </Fragment>
            )
        }
        
        export default Contact
        