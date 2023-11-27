import { Link } from 'react-router-dom'
import './../components/NotFoundPage.css'
const NotFoundPage = () => {
   
  return (
    <div className="not__found__container">
      <div className="not__found__box">
      <h2 className="not__found__message">Not Found</h2>
      <Link to='/' className='btn not__found__btn'>Back to Home</Link>
    </div>
    </div>
  )
}

export default NotFoundPage
