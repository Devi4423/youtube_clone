import formatDuration from '../utils/formatDuration';
import useFetchVideo from "../customHooks/useFetchVideo";
import formatViews from '../utils/formatViews';
import formatPublishedat from '../utils/formatPublishedat';

const RecommendedVideoCard = ({video}) => {

  const {videoId} = video.id;

  const videoInfo = useFetchVideo(videoId);

  if(!video || !videoInfo) return;

  // console.log(video);
  // console.log("videoInfo,",videoInfo)

  const {thumbnails,title,channelTitle} = video.snippet;
  const {medium} = thumbnails;
  
  return (
    <div className='grid grid-flow-col gap-2 mt-2'>
      <div className='col-span-2 w-[260px] relative'>
        <img className='w-full rounded-lg' src={medium.url} alt='thumbnail'/>
        <p className='absolute bottom-2 right-3 text-white bg-black rounded-md text-sm px-2 py-1 bg-opacity-60'>{formatDuration(videoInfo.contentDetails?.duration)}</p>
      </div>
      <div className='col-span-1'>
        <h6 className='font-bold text-base mb-1'>{title.slice(0,45)}...</h6>
        <p className='text-sm text-gray-600 mb-1'>{channelTitle}</p>
        <div className='flex gap-2'>
          <p className='text-sm text-gray-600 font-semibold'>{formatViews(videoInfo.statistics?.viewCount)} Views</p>
          <p className='text-sm text-gray-600'>{formatPublishedat(videoInfo.snippet?.publishedAt)}</p>
        </div>
      </div> 
    </div>
  )
}

export default RecommendedVideoCard