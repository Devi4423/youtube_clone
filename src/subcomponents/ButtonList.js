import Button from './Button';
import { useSelector } from 'react-redux';

const ButtonList = () => {

  const isMenuOpen = useSelector(store=>store.menu.isMenuOpen)
  
  const btnList = ["All","NewtoYou",'Live','Music','Sports','Games',"TamilSerialDrama"]
  return (
    <div className={`fixed top-[40px] sm:top-[45px] lg:top-[50px] 2xl:top-[65px] z-40 bg-white min-w-0 overflow-hidden xl:right-0 ${isMenuOpen ? "md:left-[180px] xl:left-[240px]" : "left-0"}`}>
      <div className={`flex gap-5 w-full max-w-[1536px] mx-auto px-5 py-3 md:px-10 2xl:gap-7 overflow-x-auto `}>
        {btnList.map((btn)=><Button key={btn} name={btn}></Button>)}
      </div>
    </div>
  )
}

export default ButtonList