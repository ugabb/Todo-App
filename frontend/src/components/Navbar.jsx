import Sun from '../assets/icon-sun.svg';
import BgImage from '../assets/bg-mobile-dark.jpg';

const Navbar = () => {
  return (
    <nav  className="flex justify-between items-center px-5 h-20">
        <h1 className="font-bold text-3xl text-white">T O D O</h1>
        <img src={Sun} className="h-6 w-6" alt="" />
    </nav>
  )
}

export default Navbar