import { useState } from "react";
import useFetchChannel from "../customHooks/useFetchChannel";
import formatSubscribers from '../utils/formatSubscribers';
import { useNavigate, Link } from "react-router-dom";
import convertTimeStampstoSeconds from "../utils/convertTimeStampstoSeconds";

const VideoInfo = ({ info, channelId }) => {

  const navigate = useNavigate();

  const [isSubscribed,setIsSubscribed] = useState(false);

  const [isReadMore,setIsReadMore] = useState(false);

  const channelInfo = useFetchChannel(channelId);

  if (!channelInfo) return;

  console.log(info);
  console.log(channelInfo);

  const { snippet, statistics } = info;
  const { title, description } = snippet;

  const urlRegEx = /https?:\/\/[^\s]+/;
  const timestampRegex = /\b(\d{1,2}:)?\d{1,2}:\d{2}\b/;
  const hashtagRegex = /#\w+/;
  const mentionRegex = /@[A-Za-z0-9_.-]+/;

  const regEx = /(https?:\/\/[^\s]+)|(\b(\d{1,2}:)?\d{1,2}:\d{2}\b)|(#\w+)|(@[A-Za-z0-9_.-]+)/g;
  const parts = description.split(regEx)

  const handleTimeStamps = (timestamp) => {
    const seconds = convertTimeStampstoSeconds(timestamp)
    navigate(`/watch?v=${info.id}&t=${seconds}`)
  }
  
  const formattedDescription = parts.map((part,index)=>{
    if(urlRegEx.test(part)){
      return <a href={part} key={index} target="_blank" rel="noopeer noreferrer" className="text-blue-600 underline">{part}</a>
    }
    else if(timestampRegex.test(part)){
      return <button key={index} className="text-blue-600" onClick={()=>handleTimeStamps(part)}>{part}</button>
    }
    else if(hashtagRegex.test(part)){
      return <Link key={index} to={`/results?search_query=${part.slice(1)}`}>{part}</Link>
    }
    else if(mentionRegex.test(part)){
      return <Link key={index} to={`/results?search_query=${part}`}>{part}</Link>
    }
    else{
      return <span key={index}>{part}</span>
    }
  }
  )

  const handleNavigate = () => {
    navigate(`/channel/${channelInfo.id}`);
  }

  return (
    <div className="my-3 ">
      <h6 className="font-bold text-xl mb-2">{title}</h6>
      <div className="flex gap-5 items-center">
        <div className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg' onClick={handleNavigate}>
          <img className='rounded-full w-14' src={channelInfo.snippet?.thumbnails?.default?.url} alt="channalLogo" />
          <div>
            <p>{channelInfo.snippet?.title}</p>
            <p>{formatSubscribers(channelInfo.statistics.subscriberCount)} Subscribers</p>
          </div>
        </div>
        <button className={`text-white h-fit px-4 py-2 cursor-pointer rounded-lg ${isSubscribed ? "bg-gray-500" : "bg-black"}`} onClick={()=>setIsSubscribed(!isSubscribed)}>{isSubscribed ? "Subscribed" : "Subscribe"}</button>
      </div>
      <div className="bg-gray-200 mt-2 p-4 text-sm rounded-lg whitespace-pre-wrap ">{isReadMore?formattedDescription:description.slice(0,150)}<span className="font-bold cursor-pointer " onClick={()=>setIsReadMore(!isReadMore)}>{isReadMore?" Read Less...":" Read More..."}</span></div>
    </div>
  );
};

export default VideoInfo;
