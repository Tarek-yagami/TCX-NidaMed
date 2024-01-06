import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuList from './menuList';
import HomeIcon from '../Images/Dashboard.svg';
import PatientIcon from '../Images/People.svg';
import CalendarIcon from '../Images/CalendarEvent.svg';
import NoteIcon from '../Images/PencilSquare.svg';
import LogOutIcon from '../Images/Logout.svg';
import LightModeIcon from '../Images/Light.svg';

const Sidebar = () => {
  const location = useLocation();
  const [activeMenuItem, setActiveMenuItem] = useState('');

  // Function to handle menu item click
  const handleMenuItemClick = (title) => {
    setActiveMenuItem(title);
  };

  return (
    <div className="flex flex-col justify-center w-[15%] py-[5%] mx-[5%] gap-[25vh] text-[1rem]">
    <div className='justify-center '>
      <MenuList
        Icon={HomeIcon}
        title="Acceuil"
        active={activeMenuItem === 'Acceuil'}
        onClick={() => handleMenuItemClick('Acceuil')}
        to="/"
      />
      <MenuList
        Icon={PatientIcon}
        title="Patients"
        active={activeMenuItem === 'Patients'}
        onClick={() => handleMenuItemClick('Patients')}
        to="/patients"
      />
      <MenuList
        Icon={CalendarIcon}
        title="Calendrier"
        active={activeMenuItem === 'Calendrier'}
        onClick={() => handleMenuItemClick('Calendrier')}
        to="/calendar"
      />
      <MenuList
        Icon={NoteIcon}
        title="Notes"
        active={activeMenuItem === 'Notes'}
        onClick={() => handleMenuItemClick('Notes')}
        to="/notes"
      />
      </div>
      <div className=''>
        <MenuList
        Icon={LogOutIcon}
        title="Log Out"
        active={activeMenuItem === 'Log Out'}
        onClick={() => handleMenuItemClick('Log Out')}
        to="/logout"
      />
      <MenuList
        Icon={LightModeIcon}
        title="Light Mode"
        active={activeMenuItem === 'Light Mode'}
        onClick={() => handleMenuItemClick('Light Mode')}
        to="/lightmode"
      /></div>
    </div>
  );
};

export default Sidebar;
