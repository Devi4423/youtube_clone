import formatDuration from '../utils/formatDuration';
import useFetchVideo from "../customHooks/useFetchVideo";
import formatViews from '../utils/formatViews';
import formatPublishedat from '../utils/formatPublishedat';
import useFetchChannel from '../customHooks/useFetchChannel';

const RecommendedVideoCard = ({video}) => {

  const {videoId} = video.id;

  const videoInfo = useFetchVideo(videoId);
  const channelInfo = useFetchChannel(videoInfo?.snippet?.channelId);

  if(!video || !videoInfo || !channelInfo) return;

  // console.log(video);
  // console.log("videoInfo,",videoInfo)
  // console.log("channelInfo", channelInfo);

  const {thumbnails,title,channelTitle} = video.snippet;
  const {medium} = thumbnails;
  const formattedDuration = formatDuration(videoInfo.contentDetails?.duration);

  return (
    <div className='mb-5 lg:grid lg:grid-flow-col md:gap-2 md:mt-0 mt-2'>
      <div className='mb-2 w-full relative lg:col-span-1 lg:w-[190px] xl:w-[260px]'>
        <img className='w-full sm:rounded-lg' src={medium.url} alt='thumbnail'/>
        <p className={`absolute bottom-2 right-3 text-white rounded-md text-sm px-2 py-1 font-semibold 2xl:bottom-4 2xl:right-4 ${formattedDuration === "Live" ? "bg-red-500 bg-opacity-20" : "bg-black bg-opacity-60"}`}>{formattedDuration}</p>
      </div>
      <div className='hidden md:block lg:col-span-12 lg:px-2'>
        <h6 className='font-bold mb-1 md:text-sm'>{title.slice(0,40)}...</h6>
        <p className=' md:text-xs text-gray-600 mb-1 font-semibold'>{channelTitle}</p>
        <p className='md:text-xs text-gray-600'>{formatViews(videoInfo.statistics?.viewCount)} Views . {formatPublishedat(videoInfo.snippet?.publishedAt)}</p>
      </div>
      <div className='flex gap-2 px-2 items-start md:hidden'>
        <div className='w-14'>
          <img className='w-full rounded-full' src={channelInfo?.snippet?.thumbnails?.medium.url} alt='channelLogo'/>
        </div>
        <div>
          <h6 className='text-sm font-bold mb-1'>{title}</h6>
          <p className='text-gray-600 text-xs '>{channelInfo?.snippet?.title} . {formatViews(videoInfo?.statistics?.viewCount)} Views . {formatPublishedat(videoInfo?.snippet?.publishedAt)}</p>
        </div>
      </div> 
    </div>
  )
}

export default RecommendedVideoCard