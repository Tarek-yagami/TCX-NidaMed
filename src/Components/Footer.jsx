
import Instagram from "../Images/Instagram.svg"
import Facebook from "../Images/Facebook.svg"
import Internet from "../Images/Globe.svg"
const Footer = () => {
  return (
    <div className=" bg-Bluee w-full h-[20%]">
      <div className="px-[9vw] py-[4vh] flex md:flex-row flex-col md:justify-between gap-[6vh] items-center">
      <div className="flex flex-col w-[40%] gap-[2vh]">
      <p className="font-bold">NidamMed</p>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione non voluptas error temporibus, maxime deleniti nulla in architecto eius voluptatibus itaque assumenda consequatur maiores suscipit?</p>
      <div className="flex gap-[2vw]">
        <img className="w-8 h-8" src={Internet} alt="Internet" />
                    <img className="w-8 h-8" src={Instagram} alt="Instagram" />
                    <img className="w-8 h-8" src={Facebook} alt="Facebook" />
                    
                
      </div>
      </div>
      </div>
      <p className="text-center">© 2023 MedMarket. All rights reserved</p>
    </div>
  )
}

export default Footer
