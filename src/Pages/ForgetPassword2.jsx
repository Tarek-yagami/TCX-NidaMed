import Logo from '../Images/NidaMedLogo.svg'
import InputBar from '../Components/ForgetPassword-components/InputBar'


export default function ForgetPassword2() {
  return (
    <div className="min-h-screen flex justify-center bg-EEF8FD mt-0 ">
      <div className="h-full flex flex-col items-center w-[50%]  mb-0 mt-[6vh] ">
        <img alt="logo" src={Logo} className='w-[30%] h-auto '/>
        <h1 className="text-5A92B0 text-[2.5rem] font-sans font-bold mt-[5vh] tracking-wider ">Réinitialisation du<br/><span className='ml-[12%]'>mot de passe</span></h1>
        <div className='w-[35vw] mt-[6vh]'>
        <InputBar DataPlaceholder={"********"} DataPlaceholderSize={"1"} Data={"Nouveau mot de passe"} DataSize={"1"} />
        </div>
        <div className='w-[35vw] mt-[2vh]'>
          <InputBar DataPlaceholder={"********"} DataPlaceholderSize={"1"} Data={"Confirmer le nouveau mot de passe"} DataSize={"1"} />
        </div>
        <div className='mt-[6%] mb-[0%]'>
          <button className='bg-5A92B0 h-[7.5vh] w-[25vw] text-FFFFFF font-sans font-semibold rounded-3xl hover:opacity-75'>Se connecter</button>
        </div>
        
      </div>
    </div>
    
  )
}