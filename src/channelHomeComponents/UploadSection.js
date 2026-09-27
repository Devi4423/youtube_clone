import useFetchVideo from "../customHooks/useFetchVideo";
import formatDuration  from '../utils/formatDuration';
import formatViews from '../utils/formatViews';
import formatPublishedat from "../utils/formatPublishedat";

const UploadSection = ({video}) => {

    const videoInfo = useFetchVideo(video?.snippet?.resourceId?.videoId)
    // console.log(videoInfo)

    if(!video || !videoInfo) return;

    const {title,publishedAt} = videoInfo?.snippet;
    const {duration} = videoInfo.contentDetails;
    const {viewCount} = videoInfo.statistics;
    const {thumbnails} = video?.snippet

  return (
    <div className="mb-3 grid grid-flow-col gap-2 sm:block sm:w-[180px] lg:w-[240px] xl:w-[250px]">
        <div className="relative mb-1 -z-50 col-span-1 w-[150px] aspect-video sm:w-[180px] md:mb-2 lg:w-[240px] xl:w-[250px]">
            <img className="w-full object-contain rounded-lg" src={thumbnails?.medium?.url} alt="Video Banner"/>
            <p className="absolute bottom-3 right-3 bg-black bg-opacity-65 rounded-md px-2 py-1 text-xs text-white font-bold xl:text-sm">{formatDuration(duration)}</p>
        </div>
        <div className="hidden sm:block">
            <h6 className='font-semibold text-xs xl:text-sm mb-1'>{title}</h6>
            <p className="text-xs text-gray-600">{formatViews(viewCount)} Views . {formatPublishedat(publishedAt)}</p>
        </div>
        <div className="sm:hidden col-span-11">
            <h6 className='font-semibold text-xs mb-1 line-clamp-2'>{title}</h6>
            <p className="text-xs text-gray-600">{formatViews(viewCount)} Views . {formatPublishedat(publishedAt)}</p>
        </div>
    </div>
  )
}

export default UploadSection;