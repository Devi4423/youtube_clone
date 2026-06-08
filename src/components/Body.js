import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Body = () => {
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