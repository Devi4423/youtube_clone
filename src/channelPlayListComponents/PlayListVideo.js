import { useParams, Link } from "react-router-dom";
import { useEffect } from 'react';
import usePlayListItems from "../customHooks/usePlayListItems";
import PlayListvideoCard from "./PlayListvideoCard";
import { useSelector,useDispatch } from 'react-redux';
import { openMenu } from '../reduxStore/menuSlice';
import useFetchChannel from '../customHooks/useFetchChannel';

const PlayListVideos = () => {

  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  const allPlayList = useSelector((store)=> store.playListTitle.playListTitle);
  // console.log(playList);
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log(id);

  const playList = allPlayList.find((item)=>item.id === id);
  const {title,channelId} = playList;
  // console.log(title)

  const playListItems = usePlayListItems(id);
  const channelInfo = useFetchChannel(channelId);
  // console.log(channelInfo);

  useEffect(()=>{
    dispatch(openMenu());
  },[dispatch])

  if (!playListItems) return;

  // console.log(playListItems);

  const { items } = playListItems;
  console.log(items);

  return (
    <main className={`absolute top-[60px] left-0 right-0 min-w-0 ${isMenuOpen ? 'md:left-[180px] xl:left-[240px]' : 'left-0'}`}>
      <div className='w-full max-w-[1536px] mx-auto'>
        <div className="w-full aspect-video sm:h-[300px] mb-5 md:mb-10 md:px-3 -z-0 ">
          <img
            className="w-full h-full sm:rounded-lg object-cover object-top bg-gradient-to-b from-black to-white brightness-50 blur-sm"
            src={items[0]?.snippet?.thumbnails?.medium?.url}
            alt="title-banner"
          />
        </div>
        <div className='mb-3 px-3 absolute top-[25px] md:px-10 xl:mb-5 '>
          <h5 className="font-bold text-white text-base md:text-lg xl:text-lg">{title}</h5>
          <div className='flex gap-2 items-center mt-1 md:mt-3'>
            <img className='w-7 h-7 xl:w-8 xl:h-8 rounded-full' src={channelInfo?.snippet?.thumbnails?.medium?.url} alt={channelInfo?.snippet?.title}/>
            <p className="text-xs text-gray-200 ">by {channelInfo?.snippet?.localized?.title}</p>
          </div>
        </div>
        <div className="absolute top-[150px] grid sm:px-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:pb-3">
          {items.map((item) => (
            <Link
              key={item.id}
              to={`/watch?v=${item?.snippet?.resourceId?.videoId}`}
            >
              <PlayListvideoCard item={item}/>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PlayListVideos;
