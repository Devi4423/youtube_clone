import ButtonList from "../subcomponents/ButtonList";
import VideoContainer from './VideoContainer';
import { useSelector} from 'react-redux';

const MainContainer = () => {
  const isMenuOpen = useSelector(store=>store.menu.isMenuOpen)
  return (
    <div className={`py-1 absolute top-[100px] ${isMenuOpen ? 'left-[16%]' : 'left-0'} `}>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer