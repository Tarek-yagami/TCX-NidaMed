import { Link } from 'react-router-dom';
import Logo from '../Images/logoNidaMed.svg';
export default function Navbar() {
  return (
    <div className="w-full h-[50%] px-[6vw] py-[2vh] bg-Blue33 shadow-sm font-semibold">
      <div className="flex justify-between align-center items-center flex-row text-[1.25rem]">
        <div className='flex flex-row  gap-[1vw]'>
        <img className='w-16' src={Logo} alt="" />
        <p className='text-center items-center pt-1'>Nida<span className='text-Blue'>Med</span></p></div>
        <ul className="flex gap-[4vw]">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about"  smooth duration={800}>About Us</Link></li>
          
          <li>Contact</li>
        </ul>
        <div className="flex gap-[1vw]">
          <p className="px-4 py-2"><Link to="/Login">Se connecter</Link></p>
          <button className="px-4 py-2 bg-opacity-30 backdrop-blur-xl rounded-xl bg-Blue">
            <Link to="/SignIn">S'inscrire</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
