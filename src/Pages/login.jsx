import { Link } from 'react-router-dom';
import InputBar from '../Components/InputBar'
import Google from '../Images/google.svg'
import LoginInpic from '../Images/LogIN.svg'
import Logo from '../Images/logoNidaMed.svg'

// import { useState } from 'react';
export default function Login() {
    // const [showPassword, setShowPassword] = useState(false);

 
         
  return (
    <div className="flex flex-row w-full h-auto   justify-center  ">
        <div className='flex flex-col gap-[2.5vh] px-[5%] py-[1vh] '>
        
            <p className='text-[3rem] text-center '>J’ai un compte </p>
            <InputBar Data='Email' DataPlaceholder='Adresse email'/>
        <div className='flex flex-col gap-[1vh]'>
            <h3 className='text-[2rem] font-medium text-BlueDark'>Mot de passe</h3>
            <input  type="password" placeholder='Mot de passe' className='py-[2.5vh] w-[37vw] pl-[2vw] rounded-2xl text-[2rem] border  placeholder-Blue opacity-70'/>
        </div>
        <p className=' text-right text-Blue'><Link to="/ForgetPassword">Forgot password ?</Link></p>
        <button className='py-[2.5vh] w-[37vw] px-[2vw] rounded-xl text-[2rem] text-center border bg-Blue text-White'>Se connecter</button>
        <p className=' text-center'>Continuer avec google</p>
        <div className='flex justify-center items-center'>
        <button className='flex py-[2vh] w-[10vw] px-[2vw] rounded-xl  justify-center items-center border '><img className=' w-[60%] h-auto' src={Google} alt="" /></button>
        </div>
        <p className=' text-center'>Vous n’avez pas un compte ? <span className='text-Blue'><Link to="/SignIn"> Je n’ai pas un compte</Link> </span></p>
        </div>
        <div className=' bg-Blue44'>
        <div className='flex flex-col  justify-center items-center py-[5vh] gap-[4vh]'>
           <div className='flex flex-row justify-center items-center'>
            <img className='w-[50%] h-auto' src={Logo} alt="" />
            <p className='text-[4rem] text-center font-semibold text-Blue 'style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.25)'}}>Nida<span className=' text-Gray'>Med</span></p>
            </div>
            <img className='px-[10vw] ' src={LoginInpic} alt="" />
            
             </div></div>
        

    </div>
  )
}
