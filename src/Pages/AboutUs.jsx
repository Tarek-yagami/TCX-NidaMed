import AboutUsPic from "../Images/aboutUs.svg";
export default function AboutUs() {
  return (
    <div className='flex w-full px-[5%]'>
        <img className='w-[50%]' src={AboutUsPic} alt="imaaage" />
       <div className='flex flex-col py-[15%] gap-[1vh]'> 
      <p className=' text-[3rem] font-semibold  '>About Us</p>
      <p className='text-[1.5rem] px-[10%]'>On vous aide à organiser chaque patient, ses informations, son cas, ses médicaments, et aussi vos rendez-vous. J'adore ! Cela fonctionne de manière super fluide et réduit le temps de configuration. Cependant, je suis impatient de l'essayer davantage dès que j'aurai plus de temps pour explorer.</p>
      </div>
      
    </div>
  )
}
