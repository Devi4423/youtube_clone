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
    <div className={`py-1 absolute top-[100px] ${isMenuOpen ? 'left-[16%]' : 'left-0'} `}>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer