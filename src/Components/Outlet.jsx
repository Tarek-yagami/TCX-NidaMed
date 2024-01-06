import HeroSection from "../Pages/HeroSection"
import AboutUs from "../Pages/AboutUs"
import OurServices from "../Pages/OurServices"

export default function Outlet() {
  return (
    <div>
      <HeroSection />
      <OurServices />
      <AboutUs />
      
    </div>
  )
}
