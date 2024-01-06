import { Link } from 'react-router-dom'
import HomeIcon from '../Images/Home.svg'
import NotificationIcon from '../Images/NotificationIcon.svg'
import User from '../Images/PersonCircle.svg'
import ArrowDown from '../Images/arrowDown.svg'

export default function PatientHeader() {
  return (
    <div className=' flex ml-[53rem] bg-white py-[1%] px-[3%] gap-[8vw] text-center'>
      <div className='flex items-center gap-[2vw]'>
        <Link to="/Profile"><div className='flex gap-[0.5vw]'><img src={User} alt='user-icon'/>
        <p className=''>Dr.Benameur</p></div></Link>
        <img src={ArrowDown} alt="" />
      </div>
      <div className='flex flex-row gap-[1vw]'>
      <img src={NotificationIcon} className=''/>
      <img src={HomeIcon} className=''/></div>
    </div>
  )
}
