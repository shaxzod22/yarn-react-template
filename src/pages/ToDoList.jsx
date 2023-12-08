import { useReducer,useEffect,useRef,useState } from "react"
import './../components/ToDoList.css'
const reducer = (state,action)=>{
  switch (action.type) {
    case 'ADD_ITEM':
    return {
      ...state,
      items:[...state.items,action.payload],
      
    }    
    case 'REMOVE_ITEM':
    return {
      ...state,
      items:state.items.filter((todo,index)=>index != action.payload)
    }
    case 'EDIT_ITEM':
    return {
      ...state,
      items:state.items.map((todo)=>state.selected == todo.id?{...todo,text:action.payload.text,time:action.payload.time,todoStatus:action.payload.todoStatus}:todo),
      
    }
    
    default:
    return state
  }
}

const initialState = {
  items:JSON.parse(localStorage.getItem('ToDoList')) || [],
  selected:null
}


const ToDoList = () => {
  const [state,dispatch] = useReducer(reducer,initialState);
  const [btnTitle,setBtnTitle] = useState(true)
  let nameInputRef = useRef()
  let timeInputRef = useRef()
  let statusInputRef = useRef()
  let date = new Date()
  
  const addItem = (text,time,todoStatus,id)=>{
    dispatch({type:'ADD_ITEM',payload:{text,time,todoStatus,id}})
  }
  
  const removeItem = (index)=>{
    dispatch({type:'REMOVE_ITEM',payload:index})
  }
  
  const editItem = (text,time,todoStatus,id)=>{
    dispatch({type:'EDIT_ITEM',payload:{text,time,todoStatus,id}})
    
  }
  useEffect(()=>{
    localStorage.setItem('ToDoList',JSON.stringify(state.items))
  },[state.items])
  
  const editTodoBtn=(text,time,todoStatus,id)=>{
    nameInputRef.current.value = text
    timeInputRef.current.value = time
    statusInputRef.current.value = todoStatus
    setBtnTitle(false)
    
    state.selected = id
    
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    setBtnTitle(true)
    let workTitle = e.target.work.value.trim()
    let workTime = e.target.time.value
    let workStatus = e.target.status.value
    
    if(workTitle && workTime && (workStatus !== "none") && !btnTitle){
      
      editItem(workTitle,workTime,workStatus,state.selected)
      
      
      
      e.target.reset()
    }else if(workTitle && workTime && (workStatus !== "none")){
      addItem(workTitle,workTime,workStatus,date)
      
      e.target.reset()
    }
    else{
      alert('Enter all informations!')
    }
    
    
  }
  
  const deleteTodo = (index)=>{
    removeItem(index)
  }
  
  
  return (
    <div className="todos__container">
    <h1 className="todos__heading">To Do</h1>
    
    <form onSubmit={handleSubmit} className="todos__form">
    <input name="work" placeholder="Enter here" ref={nameInputRef} type="text" className="todos__work__input" />
    <input name="time" ref={timeInputRef} type="time" className="todos__time__input" />
    <select name="status" ref={statusInputRef} defaultValue="none" className="todos__selection">
    <option disabled value="none" >Status</option>
    <option value="mandatory">Mandatory</option>
    <option value="optional">Optional</option>
    </select>
    <button  className="todos__submit__btn todos__btn">{btnTitle?'Add':'Save'}</button>
    </form>
    
    <ul className="todos__list">
    {
      state.items.map((todo,index)=>(
        <li key={index} className="todos__item">
        <div className="todos__workTitle__box">
        <h4 className="todos__title">{index+1}. {todo.text}</h4>
        <p className="todos__time">{todo.time}</p>
        </div>
        
        <p className="todos__status">{todo.todoStatus}</p>
        
        <div className="todos__btn__box">
        <button onClick={()=>deleteTodo(index)} className="todos__delete__btn todos__btn">Delete</button>
        <button onClick={()=>editTodoBtn(todo.text,todo.time,todo.todoStatus,todo.id)} className="todos__edit__btn todos__btn">Edit</button>
        </div>
        </li>
        ))
      }
      </ul>
      </div>
      )
    }
    
    export default ToDoList
    