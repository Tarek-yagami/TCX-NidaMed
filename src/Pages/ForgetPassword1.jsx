import Logo from '../Images/NidaMedLogo.svg'
import InputBar from '../Components/ForgetPassword-components/InputBar'
import { Link } from 'react-router-dom'

export default function ForgetPassword1() {
  return (
    <div className="min-h-screen flex justify-center bg-Blue44 mt-0 ">
      <div className="h-full flex flex-col items-center w-[50%]  mb-0 mt-[6vh]">
        <img alt="logo" src={Logo} className='w-[30%] h-auto '/>
        <h1 className="text-5A92B0 text-[2.5rem] font-sans font-bold mt-[5vh] tracking-wider">Réinitialisation du<br/><span className='ml-[12%]'>mot de passe</span></h1>
        <p className='text-5F696D text-[1.1rem] font-sans font-semibold w-[35vw] mt-[6%]'>Entrez votre nom d'utilisateur NidaMed, ou l' adresse e-mail avec laquelle vous vous êtes inscrit. Vous allez recevoir un lien pour réinitialiser votre mot de passe.</p>
        <div className='mt-[6%] w-[35vw]'>
          <InputBar DataPlaceholder={"yourname@gmail.com"} DataPlaceholderSize={"1"} Data={"Addresse e-mail"} DataSize={"1"} />
        </div>
        <div className='mt-[6%] mb-[0%]'>
          <Link to="/CreateNewPassword"><button className='bg-5A92B0 h-[7.5vh] w-[25vw] text-FFFFFF font-sans font-semibold rounded-3xl hover:opacity-75'>Envoyer</button></Link>
        </div>
        
      </div>
    </div>
    
  )
}