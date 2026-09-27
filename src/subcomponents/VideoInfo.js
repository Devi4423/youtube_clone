import { useState } from "react";
import useFetchChannel from "../customHooks/useFetchChannel";
import formatSubscribers from '../utils/formatSubscribers';
import { useNavigate} from "react-router-dom";
import formatViews from "../utils/formatViews";
import formatPublishedat from '../utils/formatPublishedat';
import useFormatDescription from '../customHooks/useFormatDescription';

const VideoInfo = ({ info, channelId, openDescription }) => {

  const navigate = useNavigate();

  const [isSubscribed,setIsSubscribed] = useState(false);

  const [isReadMore,setIsReadMore] = useState(false);

  const channelInfo = useFetchChannel(channelId);

  const formattedDescription = useFormatDescription(info);

  if (!channelInfo) return;

  // console.log(info);
  // console.log(channelInfo);

  const { snippet, statistics } = info;
  const { title, description } = snippet;    

  const handleNavigate = () => {
    navigate(`/channel/${channelInfo.id}`);
  }

  return (
    <>
    <div className="hidden md:block my-3 ">
      <h6 className="font-bold md:text-base md:mb-1 lg:text-lg xl:text-xl lg:mb-2">{title}</h6>
      <div className="flex md:gap-3 lg:gap-5 items-center">
        <div className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg' onClick={handleNavigate}>
          <img className='rounded-full md:w-10 lg:w-11 xl:w-14' src={channelInfo.snippet?.thumbnails?.default?.url} alt="channalLogo" />
          <div>
            <p className='md:text-base'>{channelInfo.snippet?.title}</p>
            <p className=" text-gray-400 font-semibold md:text-xs lg:text-sm ">{formatSubscribers(channelInfo.statistics.subscriberCount)} Subscribers</p>
          </div>
        </div>
        <button className={`text-white h-fit px-4 py-2 cursor-pointer rounded-lg md:text-xs lg:text-sm ${isSubscribed ? "bg-gray-500" : "bg-black"}`} onClick={()=>setIsSubscribed(!isSubscribed)}>{isSubscribed ? "Subscribed" : "Subscribe"}</button>
      </div>
      <div className="bg-gray-200 mt-2 p-4 md:text-xs lg:text-sm rounded-lg whitespace-pre-wrap">{isReadMore?formattedDescription:description.slice(0,150)}<span className="font-bold cursor-pointer " onClick={()=>setIsReadMore(!isReadMore)}>{isReadMore?" Read Less...":" Read More..."}</span></div>
    </div>
    <div className='md:hidden px-2 py-1'>
      <div className="mb-2" onClick={openDescription}>
        <h6 className='text-sm font-bold mb-1 truncate'>{title}</h6>
        <p className="text-xs text-gray-500">
          {channelInfo?.snippet?.customUrl} {formatViews(statistics?.likeCount)} likes {formatViews(statistics?.viewCount)} views {formatPublishedat(snippet?.publishedAt)} <span className="font-semibold">...More</span> 
        </p>
      </div>
      <div className='flex gap-2 mb-2 items-center '>
        <img className='w-10 rounded-full' src={channelInfo?.snippet?.thumbnails?.medium.url} alt='chanenelLogo' onClick={handleNavigate}/>
        <button className={`text-xs font-semibold px-3 py-2 cursor-pointer rounded-md ${isSubscribed ? 'bg-gray-200 text-black' : 'bg-black text-white'}`} onClick={()=>setIsSubscribed(!isSubscribed)}>{isSubscribed ? 'Unsubscribe' : 'Subscribe'}</button>
      </div>
    </div>
    </>
  );
};

export default VideoInfo;
