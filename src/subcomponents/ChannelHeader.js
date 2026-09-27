import formatSubscribers from '../utils/formatSubscribers';
import formatViews from '../utils/formatViews';
import { useState } from 'react';
import { IoClose } from "react-icons/io5";

const ChannelHeader = ({channelInfo,openChannelDescription}) => {

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
        <div className='relative w-full py-3 mb-3 px-3'>
            {bannerExternalUrl && <img className="h-[100px] sm:h-[160px] w-full object-cover rounded-xl lg:h-[180px]" src={bannerExternalUrl} alt="channel-banner"/>}
            <div className=" flex gap-3 items-center mt-3 2xl:gap-8 2xl:mt-6 ">
                <div className="col-span-1 w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] xl:w-[150px] xl:h-[150px]">
                    <img className="rounded-full w-full h-full" src={thumbnails?.medium?.url} alt="channel-logo"/>
                </div>
                <div className="hidden sm:block ">
                    <h1 className="font-semibold text-xl  mb-1 md:text-2xl lg:text-2xl xl:text-4xl">{title}</h1>
                    <p className="text-xs text-gray-600 mb-1 xl:text-sm 2xl:mb-2"><span className="font-bold text-black">{customUrl} • </span>{formatedSubscriber} subscribers • {formatedVideos} videos</p>
                    <p className="text-gray-500 text-xs mb-1 cursor-pointer xl:text-sm 2xl:mb-2">{description.slice(0,84)}<span className="font-semibold text-black" onClick={handleShowMore}>...More</span></p>
                    <div>
                        <button className="bg-gray-700 text-white px-3 py-2 text-xs cursor-pointer rounded-lg xl:text-sm 2xl:px-5 2xl:py-3" onClick={()=>setIsSubscribe(!isSubscribe)}>{isSubscribe ? "Subscribed" : "Subscribe"}</button>
                    </div>
                </div>
                <div className='sm:hidden col-span-11'>
                    <h1 className='text-xl mb-1 font-semibold'>{title}</h1>
                    <p className='text-xs font-semibold mb-1'>{customUrl}</p>
                    <p className='text-gray-500 text-xs mb-1'>{formatedSubscriber} subscribers • {formatedVideos} videos</p>
                </div>
            </div>
            <div className='sm:hidden mt-1' onClick={openChannelDescription}>
                <p className='text-gray-600 text-xs mb-1 line-clamp-2'>{description}</p>
                <p className='text-xs font-bold mb-2'>Read More</p>
                <button className="bg-gray-900 text-white px-3 py-2 text-xs cursor-pointer rounded-lg" onClick={()=>setIsSubscribe(!isSubscribe)}>{isSubscribe ? "Subscribed" : "Subscribe"}</button>
            </div>
            {
                isShowMore && 
                    <div className='sm:w-[300px] h-[350px] overflow-y-scroll bg-white shadow-2xl shadow-black  rounded-lg p-4 fixed top-[100px] left-[50%] z-50 translate-x-[-40%] lg:w-[350px] lg:h-[400px] lg:top-[50%] lg:translate-x-[-30%] lg:translate-y-[-50%] xl:w-[450px] xl:h-[500px] xl:top-[50%] xl:translate-x-[-30%] xl:translate-y-[-50%] 2xl:w-[650px] 2xl:h-[700px] 2xl:top-[50%] 2xl:translate-x-[-30%] 2xl:translate-y-[-50%]  '>
                        <div className='flex justify-between items-center  lg:mb-1 xl:mb-2 '>
                            <h4 className='text-lg font-semibold sm:text-base lg:text-lg xl:text-2xl'>{title} </h4>
                            <button className='text-lg cursor-pointer hover:bg-gray-200 rounded-lg p-2 lg:text-lg xl:text-2xl' onClick={()=>setIsShowMore(false)}><IoClose /></button>
                        </div>
                        <h6 className="text-base font-semibold mb-2 sm:text-sm lg:text-base xl:text-lg">Description:</h6>
                        <p className='whitespace-pre-wrap sm:text-xs xl:text-sm'>{description}</p>
                    </div>
            }

        </div>
    )
}

export default ChannelHeader;