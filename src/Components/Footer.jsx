
import Instagram from "../Images/Instagram.svg";
import Facebook from "../Images/Facebook.svg";
import Internet from "../Images/Globe.svg";

const Footer = () => {
  return (
    <div className="bg-Blue66 w-full h-[20%]">
      <div className="px-[9vw] py-[4vh] flex md:flex-row flex-col md:justify-between gap-[6vh] items-center">
        <div className="flex flex-col w-[40%] gap-[2vh]">
          <p className="font-bold">NidaMed</p>
          <p>NidaMed is your trusted healthcare partner, dedicated to streamlining patient management, organizing medical information, and optimizing appointment schedules. Our platform empowers healthcare professionals to provide efficient and personalized care. Experience the future of healthcare with NidaMed.</p>
          <div className="flex gap-[2vw]">
            <img className="w-8 h-8" src={Internet} alt="Internet" />
            <img className="w-8 h-8" src={Instagram} alt="Instagram" />
            <img className="w-8 h-8" src={Facebook} alt="Facebook" />
          </div>
        </div>
        <div className="text-white gap-[2vh]">
          <p className="font-semibold">Contact Us:</p>
          <p>Email: info@nidamed.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
      <p className="text-center">© 2023 NidaMed. All rights reserved</p>
    </div>
  );
};

export default Footer;
