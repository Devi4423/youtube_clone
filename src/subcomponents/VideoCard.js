import formatDuration from "../utils/formatDuration";
import formatViews from "../utils/formatViews";
import formatPublishedat from '../utils/formatPublishedat';

const VideoCard = ({video}) => {

    if(!video) return;
    // console.log(video)

    const {contentDetails} = video;
    const {snippet,statistics} = video;
    const {thumbnails,title,channelTitle,publishedAt} = snippet;
    const {medium} = thumbnails;
    const {viewCount} = statistics;
    const {duration} = contentDetails;

  return (
    <div className="w-full min-w-0 rounded-t-md cursor-pointer">
      <div className="relative w-full aspect-video">
        <img src={medium.url} alt="thumbnail" className='w-full h-full object-cover sm:rounded-2xl'/>
        <p className="absolute bottom-3 right-4 font-bold text-white text-xs lg:text-sm bg-black px-2 py-1 bg-opacity-60 rounded-md">{formatDuration(duration)}</p>
      </div>
      <div className="mx-2 pb-2 sm:mx-0">
        <h6 className="text-xs sm:text-sm font-semibold mt-2 2xl:mb-2">{title}</h6>
        <p className="text-xs text-gray-700 mt-1 md:hidden">{channelTitle} <span className="ml-2"> {formatViews(viewCount)} Views</span> . {formatPublishedat(publishedAt)}</p>
        <div className='hidden md:block'>
          <p className="text-xs sm:mt-1 text-gray-600 font-semibold 2xl:mb-2">{channelTitle}</p>
          <p className="text-xs sm:mt-1 text-gray-500 font-semibold">{formatViews(viewCount)} Views . {formatPublishedat(publishedAt)}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard;