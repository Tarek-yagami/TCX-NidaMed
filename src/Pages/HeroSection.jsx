import { Link } from 'react-router-dom';
import Health from '../Images/Health2.0.svg';

export default function HeroSection() {
  return (
    <div className='flex w-full px-[5%]'>
       <div className='flex flex-col  px-[8%] py-[10%]'> 
        <p className='text-[1rem]'> Bienvenue dans l univers des médecins</p>
      <p className=' text-[3rem] font-semibold  mb-[40%]' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.25)'}}>Simplifiez votre quotidien médical 
      <span className="text-Blue"> in NidaMed</span></p>
      <Link to="/Login"><button className='mx-[30%] py-2 px-4  bg-Blue shadow-sm  rounded-md'>Pret à debuter ?</button></Link>
      </div>
      <img className='w-[50%]' src={Health} alt="imaaage" />
    </div>
  )
}
