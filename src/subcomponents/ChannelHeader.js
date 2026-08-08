import formatSubscribers from '../utils/formatSubscribers';
import formatViews from '../utils/formatViews';
import { useState } from 'react';
import { IoClose } from "react-icons/io5";

const ChannelHeader = ({channelInfo}) => {

    const [isShowMore, setIsShowMore] = useState(false);
    const [isSubscribe,setIsSubscribe] = useState(false);

    if(!channelInfo) return;

    const { brandingSettings, statistics, snippet} = channelInfo;
    const { bannerExternalUrl } = brandingSettings?.image;
    const { title, description, customUrl, thumbnails} = snippet;
    const { subscriberCount, videoCount } = statistics;

    const formatedSubscriber = formatViews(subscriberCount);
    const formatedVideos = formatSubscribers(videoCount);

    const handleShowMore = () => {
        setIsShowMore(true);
    }


    return(
        <div className='relative w-full py-3 mb-3 '>
            {bannerExternalUrl && <img className="h-[180px] w-full object-cover  rounded-lg" src={bannerExternalUrl} alt="channel-banner"/>}
            <div className=" grid grid-flow-col gap-3 items-center mt-3 ">
                <div className=" col-span-1 w-[150px] h-[150px] ">
                    <img className="rounded-full w-full h-full  " src={thumbnails?.medium?.url} alt="channel-logo"/>
                </div>
                <div className="col-span-11 ">
                    <h1 className="font-semibold text-4xl mb-1">{title}</h1>
                    <p className="text-sm text-gray-600 mb-1"><span className="font-bold text-black">{customUrl} • </span>{formatedSubscriber} subscribers • {formatedVideos} videos</p>
                    <p className="text-gray-500 text-sm mb-1 cursor-pointer">{description.length > 100 ? <> {description.slice(0,100)} <span className="font-semibold text-black" onClick={handleShowMore}>...More</span> </> : description }</p>
                    <div>
                        <button className="bg-gray-700 text-white px-3 py-2 text-sm cursor-pointer rounded-lg " onClick={()=>setIsSubscribe(!isSubscribe)}>{isSubscribe ? "Subscribed" : "Subscribe"}</button>
                    </div>
                </div>
            </div>
            {
                isShowMore && 
                    <div className='w-[450px] h-[500px] overflow-y-scroll bg-white shadow-xl rounded-lg p-4 fixed top-[100px] left-[50%] translate-x-[-200px] '>
                        <div className='flex justify-between items-center mb-2 '>
                            <h4 className='text-2xl font-semibold '>{title} </h4>
                            <button className='text-2xl cursor-pointer hover:bg-gray-200 rounded-lg p-2' onClick={()=>setIsShowMore(false)}><IoClose /></button>
                        </div>
                        <h6 className="text-lg font-semibold mb-2 ">Description:</h6>
                        <p className='whitespace-pre-wrap text-sm '>{description}</p>
                    </div>
            }

        </div>
    )
}

export default ChannelHeader;