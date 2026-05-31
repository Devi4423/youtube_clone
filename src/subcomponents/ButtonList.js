import Button from './Button';
import { useSelector } from 'react-redux';

const ButtonList = () => {

  const isMenuOpen = useSelector(store=>store.menu.isMenuOpen)
  
  const btnList = ["All","New to You",'Live','Music','Sports','Games',"Tamil Serial Drama"]
  return (
    <div className={`flex gap-5 px-10 py-3 w-full fixed z-40 bg-white top-[50px] ${isMenuOpen ? 'left-[16%]' : 'left-0'}`}>
      {btnList.map((btn)=><Button name={btn}></Button>)}
    </div>
  )
}

export default ButtonList