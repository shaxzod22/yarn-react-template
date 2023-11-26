
import PropTypes from 'prop-types';

import './contact.css'

const User = (props) => {
const {firstname,lastname,phoneNumber,relativeness,id,deleteI,editI}=props
const classOfRelativeness = relativeness.toLowerCase()=='family'?'family relativeness':relativeness.toLowerCase()=='friends'?'friend relativeness':relativeness.toLowerCase()=='relatives'?'relative relativeness':relativeness.toLowerCase()=='other'?'other relativeness':'relativeness'


  return (
    <>
    <div className='user__item'>
     <div className="user__info__box">
     <h3 className='user__name'>{firstname} {lastname} <span className={classOfRelativeness}>{relativeness=='none'?'':relativeness}</span></h3>
      <p className="phone__number">{phoneNumber}</p>
     </div>
     <div className="btn__wrapper">
      <button onClick={()=>editI(id)} className="edit btn">Edit</button>
     <button onClick={()=>deleteI(id)} className="btn delete">Delete</button>
     </div>
    </div>
    </>
  )
}

User.propTypes={
firstname:PropTypes.string,
lastname:PropTypes.string,
phoneNumber:PropTypes.string,
relativeness:PropTypes.string,
id:PropTypes.string,
deleteI:PropTypes.func,
editI:PropTypes.func,
}

export default User
