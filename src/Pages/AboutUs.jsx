import AboutUsPic from "../Images/aboutUs.svg";
export default function AboutUs() {
  return (
    <div className='flex w-full px-[5%]'>
        <img className='w-[50%]' src={AboutUsPic} alt="imaaage" />
       <div className='flex flex-col py-[15%] gap-[1vh]'> 
      <p className=' text-[3rem] font-semibold  '>About Us</p>
      <p className='text-[1.5rem] px-[10%]'>    on vous aide a organiser chaque patients et ses informatios son cas ses medicaments ... aussi votre rendez vous I love it! It works super smoothly and reduces the time to set up the first and rt from Figma to Webflow. However, I am excited to try it out once I have more time to explore</p>
      </div>
      
    </div>
  )
}
