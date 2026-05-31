import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className=" py-2 flex w-full">
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Body