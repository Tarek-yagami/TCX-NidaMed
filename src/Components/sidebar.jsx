import MenuList from "./menuList"
import HomeIcon from '../Images/Home.svg'
import PatientIcon from '../Images/People.svg'
import CalendarIcon from '../Images/CalendarEvent.svg'
import NoteIcon from '../Images/PencilSquare.svg'
import LogOutIcon from "../Images/Logout.svg"
export default function sidebar() {
  return (
    <div className="flex flex-col justify-start py-[5%] mx-[4.5%] gap-[4vh]">
        
        <MenuList Icon={HomeIcon} title='Acceuil' active='False'/>  
        <MenuList Icon={PatientIcon} title='Patients' active='False'/>
        <MenuList Icon={CalendarIcon} title='Calendrier' active='False'/>
        <MenuList Icon={NoteIcon} title='Notes' active='False'/>
        <MenuList Icon={LogOutIcon} title='Log Out' active='False'/>
        <MenuList Icon={NoteIcon} title='Light Mode' active='False'/>
        
      
    </div>
  )
}
