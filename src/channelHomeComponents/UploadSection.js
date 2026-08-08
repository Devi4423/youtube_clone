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
    <div className="w-[300px]">
        <div className="w-[300px] relative mb-2 -z-50">
            <img className="w-full object-contain rounded-lg" src={thumbnails?.medium?.url} alt="Video Banner"/>
            <p className="absolute bottom-3 right-3 bg-black bg-opacity-65 rounded-md px-2 py-1 text-sm text-white font-bold ">{formatDuration(duration)}</p>
        </div>
        <div>
            <h6 className='font-medium text-sm mb-1'>{title}</h6>
            <p className="text-xs font-medium text-gray-600">{formatViews(viewCount)} Views . {formatPublishedat(publishedAt)}</p>
        </div>
    </div>
  )
}

export default UploadSection