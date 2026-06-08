import { BiMenu } from "react-icons/bi";
import { Youtube_Logo } from "../utils/constants";
import { FiSearch } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../reduxStore/menuSlice";
import { useState,useEffect } from 'react';
import { cacheResults } from "../reduxStore/cacheSlice";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {

  const [searchQuery,setSearchQuery] = useState("");
  const [suggesstions,setSuggesstions] = useState([]);
  const [showSuggesstions,setShowSuggesstions] = useState(false);
  const navigate = useNavigate()

  const searchCache = useSelector(store=>store.cache);

  const dispatch = useDispatch();

  const getSearchSuggesstions = async() => {
    console.log('API CALL', searchQuery)
    const data = await fetch("https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggesstions(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }))
  }

  /***
   * 
   *  searchCache = {
   *      "iphone":["iphone","iphone11","iphone pro max"] 
   * }
   * 
   */
  
  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggesstions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggesstions();
      }
    },200);

    return ()=>{
      clearTimeout(timer);
    }
  },[searchQuery])

  const handleToggleMenu = () => {
    dispatch(toggleMenu())
  }

  const handleSearch = (query) => {
    if(!query) return
    
    navigate('/results?search_query='+query);
  }

  return (
    <div className="grid grid-flow-col px-5 py-2 items-center fixed z-50 bg-white w-full">
        <div className="flex col-span-2 items-center">
            <BiMenu className="text-3xl mr-5 cursor-pointer hover:bg-gray-200 rounded-md" onClick={handleToggleMenu}/>
            <img src={Youtube_Logo} alt="Logo" className="w-24 object-contain"/>
        </div>
        <div className="col-span-6 w-3/4">
          <div className="flex items-center">
            <input 
              placeholder="Search" 
              value={searchQuery} 
              onChange={(e)=>setSearchQuery(e.target.value)} 
              onFocus={()=>setShowSuggesstions(true)}
              onBlur={()=>setShowSuggesstions(false)}
              onKeyDown={(e)=>{
                if(e.key==='Enter'){
                  handleSearch(searchQuery)
                }
              }}
              className="flex-1 border border-gray-400 px-4 py-[5px] border-collapse rounded-l-full font-semibold focus:outline-none" />
            <div className="border border-gray-300 px-6 py-2 rounded-r-full bg-gray-100 text-lg" onClick={()=>handleSearch(searchQuery)}><FiSearch /></div>
          </div>
          {showSuggesstions && suggesstions.length>0 &&
            <div className="fixed bg-white shadow-lg px-4 py-2 rounded-lg z-50 w-[588px]">
              {suggesstions.map(suggesstion=>
                <Link key={suggesstion} to={'/results?search_query='+suggesstion}>
                  <p  className="mb-1 flex items-center cursor-pointer hover:bg-gray-100">
                    <span className="text-sm mr-2"><FiSearch/></span>
                  {suggesstion}</p>
                </Link>)}
            </div>
          }
        </div>
        <div className="col-span-2 text-3xl justify-self-center"><FaCircleUser/></div>
    </div>
  )
}

export default Header;