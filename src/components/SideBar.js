import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {

  const menuOpen = useSelector(store=>store.menu.isMenuOpen);

  if(!menuOpen) return;

  return (
    <div className='hidden md:block md:w-[180px] md:fixed bg-white z-50 top-[47px] py-3 h-full xl:w-[240px] 2xl:top-[60px]' >
      <div className="border-b-[1px] border-b-gray-200 px-3 pb-4">
        <Link to="/">
          <div className="py-1 px-2 text-xs flex items-center gap-3 hover:bg-gray-100 hover:font-semibold rounded-xl cursor-pointer lg:gap-5 lg:text-sm 2xl:font-semibold "><MdHome className="text-2xl 2xl:mb-2" /> Home</div>
        </Link>
        <div className="py-1 px-2 text-xs flex items-center gap-3 hover:bg-gray-200 hover:font-semibold rounded-xl cursor-pointer lg:gap-5 lg:text-sm 2xl:font-semibold "><SiYoutubeshorts className="text-xl"/> Shorts</div>
      </div>
      <div className="py-3 border-b-[1px] border-b-gray-200 px-3 pb-4">
        <h6 className="font-semibold md:text-base py-1 px-2 lg:text-lg 2xl:mb-2">Subscriptions</h6>
        <p className="py-1 px-2 text-xs  flex items-center gap-5 hover:bg-gray-100  rounded-xl cursor-pointer lg:text-sm">NRFM Vlogs</p>
        <p className="py-1 px-2 text-xs flex items-center gap-5 hover:bg-gray-100 rounded-xl cursor-pointer lg:text-sm">Sun TV</p>
        <p className="py-1 px-2 text-xs flex items-center gap-5 hover:bg-gray-100 rounded-xl cursor-pointer lg:text-sm">PuthiyaThalamurai TV</p>
        <p className="py-1 px-2 text-xs flex items-center gap-5 hover:bg-gray-100 rounded-xl cursor-pointer lg:text-sm">Sathiyam TV</p>
      </div>
    </div>
  )
}

export default SideBar;