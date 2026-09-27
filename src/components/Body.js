import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import useOnlineStatus from '../customHooks/useOnlineStatus';

const Body = () => {

  const isOnline = useOnlineStatus();
  // console.log(isOnline);

  if(!isOnline){
    return(
      <div className='flex flex-col justify-center items-center w-full h-screen '>
        <p className='text-2xl font-bold mb-2'>No Internet Connection!!!</p>
        <p className='text-xl font-semibold '>Please Check Your Internet and Try Again.</p>
      </div>
    )
  }

  return (
    <div className='w-full min-w-0 min-h-screen max-w-[2560px] mx-auto'>
      <Header/>
      <div className=" py-2 flex w-full min-w-0 mx-auto min-h-screen">
        <SideBar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Body