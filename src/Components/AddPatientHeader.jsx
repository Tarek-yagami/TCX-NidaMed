import HomeIcon from '../Images/Home.svg'
import UploadIcon from '../Images/CloudUploadFill.svg'
import NotificationIcon from '../Images/NotificationIcon.svg'
import User from '../Images/PersonCircle.svg'


export default function PatientHeader() {
  return (
    <div className='w-screen flex ml-[150vw] bg-white'>
      <div className='flex items-center'>
        <img src={User} alt='user-icon'/>
        <p className='ml-[0.7vw]'>username</p>
      </div>
      <img src={NotificationIcon} className='ml-[10vw]'/>
      <img src={HomeIcon} className='ml-[1vw]'/>
    </div>
  )
}
