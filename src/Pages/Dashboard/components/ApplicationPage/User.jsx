
import ApplicantImage from './ApplicantImage'
import "./Application.css"

function User(prop) {
  return (
    <div className='appInfo-container'>
        <ApplicantImage/>
        <div>
            <p className='name'>{prop.name}</p>
            <p> ID-20239078</p>  
        </div>
    </div>
  )
}

export default User
