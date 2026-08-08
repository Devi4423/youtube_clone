import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import useOnlineStatus from '../customHooks/useOnlineStatus';

const Body = () => {

  const isOnlineStatus = useOnlineStatus();
  // console.log("onlineStatus",isOnlineStatus)

  if(isOnlineStatus === false){
    return(
      <div>You are Offline! Please make your network connection!!!</div>
    )
  }

  return (
    <div>
      <Header/>
      <div className=" py-2 flex w-full">
        <SideBar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Body