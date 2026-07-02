import { useState } from "react";
import useFetchChannel from "../customHooks/useFetchChannel";
import formatSubscribers from '../utils/formatSubscribers';

const VideoInfo = ({ info, channelId }) => {

  const [isSubscribed,setIsSubscribed] = useState(false);

  const [isReadMore,setIsReadMore] = useState(false);

  const channelInfo = useFetchChannel(channelId);

  if (!channelInfo) return;

  console.log(info);
  // console.log(channelInfo);

  const { snippet, statistics } = info;
  const { title, description } = snippet;

  return (
    <div className="my-3 ">
      <h6 className="font-bold text-xl mb-2">{title}</h6>
      <div className="flex gap-5 items-center">
        <div className='flex items-center gap-2'>
          <img className='rounded-full w-14' src={channelInfo.snippet?.thumbnails?.default?.url} alt="channalLogo" />
          <div>
            <p>{channelInfo.snippet?.title}</p>
            <p>{formatSubscribers(channelInfo.statistics.subscriberCount)} Subscribers</p>
          </div>
        </div>
        <button className={`text-white h-fit px-4 py-2 cursor-pointer rounded-lg ${isSubscribed ? "bg-gray-500" : "bg-black"}`} onClick={()=>setIsSubscribed(!isSubscribed)}>{isSubscribed ? "Subscribed" : "Subscribe"}</button>
      </div>
      <div className="bg-gray-200 mt-2 p-4 rounded-lg ">{isReadMore?description:description.slice(0,235)}<span className="font-bold cursor-pointer " onClick={()=>setIsReadMore(!isReadMore)}>{isReadMore?" Read Less...":" Read More..."}</span></div>
    </div>
  );
};

export default VideoInfo;
