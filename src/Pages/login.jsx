import Shield from '../Images/shieldedCircle.svg'
import Google from '../Images/google.svg'
// import { useState } from 'react';
export default function Login() {
    // const [showPassword, setShowPassword] = useState(false);

 
         
  return (
    <div className="flex flex-row  h-auto mx-[10%] my-[10%]    justify-center  shadow-xl">
        <div className=' bg-Blue44'>
        <div className='flex flex-col  justify-center items-center py-[40vh] gap-[5vh]'>
            <img className='px-[10vw] ' src={Shield} alt="" />
            <p className='text-[3rem] text-center font-semibold text-Blue 'style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.25)'}}>Nida<span className=' text-Gray'>Med</span></p>
             </div></div>
        <div className='flex flex-col gap-[3vh] px-[5%] py-[5%] '>
        <div className='flex flex-col gap-[1vh] '>
            <p className='text-[3rem] text-center'>S inscrire</p>
            <h3 className='text-[2rem] font-medium text-BlueDark'>Email</h3>
            <input placeholder='Email' className='py-[2.5vh] w-[37vw] pl-[2vw] rounded-xl text-[2rem] border '/>
        </div>
        <div className='flex flex-col gap-[1vh]'>
            <h3 className='text-[2rem] font-medium text-BlueDark'>Mot de passe</h3>
            <input  type="password" placeholder='Mot de passe' className='py-[2.5vh] w-[37vw] pl-[2vw] rounded-xl text-[2rem] border'/>
        </div>
        <p className=' text-right'>forgot password ?</p>
        <button className='py-[2.5vh] w-[37vw] px-[2vw] rounded-xl text-[2rem] text-center border'>Login</button>
        <p className=' text-center'>or</p>
        <button className='flex flex-row py-[2.5vh] w-[37vw] px-[2vw] rounded-xl text-[2rem] justify-center items-center text-center border gap-[1vw]'>Login with Google <img className=' w-[7.5%] h-auto' src={Google} alt="" /></button>
        </div>

    </div>
  )
}
