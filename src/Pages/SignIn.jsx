import InputBar from '../Components/InputBar'
import SignIN from '../Images/SignIN.svg'
import Logo from '../Images/logoNidaMed.svg'
export default function SignIn() {
  return (
    <div className='flex flex-row justify-center '>
        <div className='flex flex-col gap-[2vh] px-[5%] py-[0.5%]  '>
            
            <p className='text-[3rem] text-center'>Creer nouveau compte</p>
            <InputBar Data='Nom Complet' DataPlaceholder='Tarek Benameur'/>
            <InputBar Data='Email' DataPlaceholder='lt_benameur@esi.dz'/>
            <div className='flex flex-col gap-[1vh]'>
                <h3 className='text-[2rem] font-medium text-BlueDark'>Mot de passe</h3>
                <input  type="password" placeholder='Mot de passe' className='py-[2.5vh] w-[37vw] pl-[2vw] rounded-xl text-[2rem] border'/>
            </div>
            
            <button className='py-[2.5vh] w-[37vw] px-[2vw] rounded-xl text-[2rem] text-center border  bg-Blue text-White'>Créer nouveau compte</button>
        </div>
        <div className='flex flex-col  justify-center items-center py-[0vh] gap-[5vh]  bg-Blue44'>
           <div className='flex flex-row justify-center items-center'>
            <img className='w-[50%] h-auto' src={Logo} alt="" />
            <p className='text-[4rem] text-center font-semibold text-Blue 'style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.25)'}}>Nida<span className=' text-Gray'>Med</span></p>
            </div>
            <img className='px-[10vw] ' src={SignIN} alt="" />
            
             </div> 
    </div>
  )
}
