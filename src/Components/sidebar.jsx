import { useState } from 'react';
import MenuList from './menuList';
import HomeIcon from '../Images/Dashboard.svg';
import PatientIcon from '../Images/People.svg';
import CalendarIcon from '../Images/CalendarEvent.svg';
import NoteIcon from '../Images/PencilSquare.svg';
import LogOutIcon from '../Images/Logout.svg';
import LightModeIcon from '../Images/Light.svg';

const Sidebar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('');

  // Function to handle menu item click
  const handleMenuItemClick = (title) => {
    setActiveMenuItem(title);
  };

  return (
    <div className="flex flex-col justify-center w-[15%] py-[5%] pl-[3%] pr-[2%] gap-[25vh] text-[1rem] bg-White">
      <div className='justify-center '>
        <MenuList
          Icon={HomeIcon}
          title="Acceuil"
          active={activeMenuItem === 'Acceuil'}
          onClick={() => handleMenuItemClick('Acceuil')}
          path="/Home"
        />
        <MenuList
          Icon={PatientIcon}
          title="Patients"
          active={activeMenuItem === 'Patients'}
          onClick={() => handleMenuItemClick('Patients')}
          path="/Patients"
        />
        <MenuList
          Icon={CalendarIcon}
          title="Calendrier"
          active={activeMenuItem === 'Calendrier'}
          onClick={() => handleMenuItemClick('Calendrier')}
          path="/Calendar"
        />
        <MenuList
          Icon={NoteIcon}
          title="Notes"
          active={activeMenuItem === 'Notes'}
          onClick={() => handleMenuItemClick('Notes')}
          path="/Notes"
        />
      </div>
      <div className=''>
        <MenuList
          Icon={LogOutIcon}
          title="Log Out"
          active={activeMenuItem === 'Log Out'}
          onClick={() => handleMenuItemClick('Log Out')}
          path="/"
        />
        <MenuList
          Icon={LightModeIcon}
          title="Light Mode"
          active={activeMenuItem === 'Light Mode'}
          onClick={() => handleMenuItemClick('Light Mode')}
          path="/Lightmode"
        />
      </div>
    </div>
  );
};

export default Sidebar;
