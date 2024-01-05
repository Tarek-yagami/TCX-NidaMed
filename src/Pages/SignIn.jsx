import InputBar from '../Components/InputBar'
import SignIN from '../Images/SignIN.svg'

export default function SignIn() {
  return (
    <div className='flex flex-row mx-[10%] my-[10%] justify-center'>
        <div className='flex flex-col gap-[3vh] px-[5%] py-[5%]  bg-Green'>
            
            <p className='text-[3rem] text-center'>Creer nouveau compte</p>
            <InputBar Data='Nom Complet' DataPlaceholder='Tarek Benameur'/>
            <InputBar Data='Email' DataPlaceholder='lt_benameur@esi.dz'/>
            <div className='flex flex-col gap-[1vh]'>
                <h3 className='text-[2rem] font-medium text-BlueDark'>Mot de passe</h3>
                <input  type="password" placeholder='Mot de passe' className='py-[2.5vh] w-[37vw] pl-[2vw] rounded-xl text-[2rem] border'/>
            </div>
            <p className=' text-right'>forgot password ?</p>
            <button className='py-[2.5vh] w-[37vw] px-[2vw] rounded-xl text-[2rem] text-center border'>Creer nouveau compte</button>
        </div>
        <div className='flex flex-col justify-center items-center py-[40vh] gap-[5vh]'>
            <img className='' src={SignIN} alt="" />
            </div>    
    </div>
  )
}
