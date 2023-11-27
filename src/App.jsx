import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import CommentsPage from './pages/CommentsPage'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import PostsPage from './pages/PostsPage'
import TodosPage from './pages/TodosPage'
import GalleryPage from './pages/GalleryPage'



function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route  element={<Layout/>}>
    <Route path='/' element={<HomePage/>} />
    <Route path='/todos/:userId' element={<TodosPage/>} />
    <Route path='/gallery/:userId' element={<GalleryPage/>} />
    <Route path='/posts/:userId' element={<PostsPage/>} />
    <Route path='/posts/comments/:userId' element={<CommentsPage/>} />
    </Route>
    
    <Route path='*' element={<NotFoundPage/>} />
    </Routes>
    </BrowserRouter>
    )
  }
  
  export default App
  