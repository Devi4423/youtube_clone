import { useEffect } from 'react';
import { openMenu } from "../reduxStore/menuSlice";
import ButtonList from "../subcomponents/ButtonList";
import VideoContainer from './VideoContainer';
import { useSelector, useDispatch} from 'react-redux';

const MainContainer = () => {

  const isMenuOpen = useSelector(store=>store.menu.isMenuOpen);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(openMenu());
  },[dispatch])

  return (
    <main className={`py-1 absolute top-[100px] min-w-0 bottom-0 overflow-x-hidden right-0 2xl:top-[125px]  ${isMenuOpen ? 'md:left-[180px] xl:left-[240px] ' : 'md:left-0'} `}>
      <div className={`w-full min-w-0 max-w-[1536px] mx-auto`}>
        <ButtonList/>
        <VideoContainer/>
      </div>
    </main>
  )
}

export default MainContainer