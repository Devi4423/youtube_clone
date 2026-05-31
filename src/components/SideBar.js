import { MdHome } from "react-icons/md";
import { MdOutlineHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { useSelector } from 'react-redux';

const SideBar = () => {

  const menuOpen = useSelector(store=>store.menu.isMenuOpen);

  if(!menuOpen) return;

  return (
    <div className='w-[16%] fixed bg-white z-50 top-[47px] py-3 h-full'>
      <div className="border-b-[1px] border-b-gray-200 px-3 pb-4">
        <div className="py-1 px-2 text-sm flex items-center gap-5 hover:bg-gray-100 hover:font-semibold rounded-xl cursor-pointer"><MdHome className="text-2xl" /> Home</div>
        <div className="py-1 px-2 text-sm flex items-center gap-5 hover:bg-gray-200 hover:font-semibold rounded-xl cursor-pointer"><SiYoutubeshorts className="text-xl"/> Shorts</div>
      </div>
      <div className="py-3 border-b-[1px] border-b-gray-200 px-3 pb-4">
        <h6 className="font-semibold text-lg py-1 px-2">Subscriptions</h6>
        <p className="py-1 px-2 text-sm  flex items-center gap-5 hover:bg-gray-100  rounded-xl cursor-pointer">NRFM Vlogs</p>
        <p className="py-1 px-2 text-sm flex items-center gap-5 hover:bg-gray-100 rounded-xl cursor-pointer">Sun TV</p>
        <p className="py-1 px-2 text-sm flex items-center gap-5 hover:bg-gray-100 rounded-xl cursor-pointer">PuthiyaThalamurai TV</p>
        <p className="py-1 px-2 text-sm flex items-center gap-5 hover:bg-gray-100 rounded-xl cursor-pointer">Sathiyam TV</p>
      </div>
    </div>
  )
}

export default SideBar