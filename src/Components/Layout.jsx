import Footer from "./Footer";
import Navbar from "./Navbar";
import Outlet from "./Outlet";

export default function Layout() {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}
