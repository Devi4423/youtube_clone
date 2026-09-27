import { BiMenu } from "react-icons/bi";
import { Youtube_Logo } from "../utils/constants";
import { FiSearch } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../reduxStore/menuSlice";
import { useState, useEffect } from "react";
import { cacheResults } from "../reduxStore/cacheSlice";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Suggesstions from '../responsiveMobileComponents/Suggesstions';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggesstions, setSuggesstions] = useState([]);
  const [showSuggesstions, setShowSuggesstions] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const locationHref = location.pathname;

  const searchCache = useSelector((store) => store.cache);

  const dispatch = useDispatch();

  const getSearchSuggesstions = async () => {
    // console.log('API CALL', searchQuery)
    const data = await fetch(
      "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchQuery,
    );
    const json = await data.json();
    // console.log('suggesstions',json);
    setSuggesstions(json[1]);
    // console.log(suggesstions)
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      }),
    );
  };

  /***
   *
   *  searchCache = {
   *      "iphone":["iphone","iphone11","iphone pro max"]
   * }
   *
   */

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggesstions(searchCache[searchQuery]);
      } else {
        getSearchSuggesstions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache]);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query) return;

    navigate("/results?search_query=" + query);
  };

  if (locationHref === "/search") {
    return (
      <div>
      <div className="flex gap-2 py-2 px-2 items-center ">
        <input
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          onKeyDown={(e)=>{
            if(e.key === 'Enter'){
              handleSearch(searchQuery);
            }
          }}
          className="focus:outline-none border border-gray-400 px-2 py-1 text-base font-semibold rounded-md flex-1 "
        />
        <FiSearch className="font-semibold" onClick={()=>handleSearch(searchQuery)}/>
      </div>
      <div>
          <Suggesstions suggesstions={suggesstions}/>
      </div>
    </div>
    );
  }

  return (
    <div className="grid grid-flow-col px-2 min-w-0 sm:px-5 py-2 items-center fixed z-50 bg-white w-full 2xl:py-5">
      <div className="flex col-span-9 sm:col-span-2 items-center 2xl:col-span-3 ">
        <BiMenu
          className="text-2xl lg:text-3xl mr-3 sm:mr-5 cursor-pointer hover:bg-gray-200 rounded-md"
          onClick={handleToggleMenu}
        />
        <img
          src={Youtube_Logo}
          alt="Logo"
          className="w-20 lg:w-24 object-contain"
        />
      </div>
      <div className="col-span-1 sm:col-span-8 md:col-span-6 w-3/4 2xl:col-span-8 ">
        <div className=" hidden sm:flex items-center">
          <input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggesstions(true)}
            onBlur={() => {
              setTimeout(() => setShowSuggesstions(false), 200);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(searchQuery);
              }
            }}
            className=" flex-1 border border-gray-400 px-4 py-[5px] border-collapse rounded-l-full font-semibold focus:outline-none sm:text-sm lg:text-base"
          />
          <div
            className="border border-gray-300 px-6 py-2 rounded-r-full bg-gray-100 sm:text-sm lg:text-lg"
            onClick={() => handleSearch(searchQuery)}
          >
            <FiSearch />
          </div>
        </div>
        <div className="flex items-center col-span-1 sm:hidden">
          <button
            className="text-lg hover:bg-gray-200 p-2 rounded-md cursor-pointer"
            onClick={() => navigate("/search")}
          >
            <FiSearch />
          </button>
        </div>
        {showSuggesstions && suggesstions.length > 0 && (
          <div className="fixed bg-white shadow-lg px-4 py-2 rounded-lg z-50 sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[588px] 2xl:w-[880px]">
            {suggesstions.map((suggesstion) => (
              <Link
                key={suggesstion}
                to={"/results?search_query=" + suggesstion}
              >
                <p
                  className="mb-1 flex items-center cursor-pointer hover:bg-gray-100 sm:text-xs md:text-sm lg:text-base"
                  onMouseDown={() => handleSearch(suggesstion)}
                  value={suggesstion}
                >
                  <span className="text-sm mr-2">
                    <FiSearch />
                  </span>
                  {suggesstion}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="sm:col-span-2 text-2xl lg:text-3xl sm:justify-self-center 2xl:col-span-1">
        <FaCircleUser />
      </div>
    </div>
  );
};

export default Header;
