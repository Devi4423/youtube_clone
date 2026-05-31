import formatDuration from "../utils/formatDuration";
import formatViews from "../utils/formatViews";

const VideoCard = ({video}) => {

    if(!video) return;
    // console.log(video)

    const {contentDetails} = video;
    const {snippet,statistics} = video;
    const {thumbnails,title,channelTitle} = snippet;
    const {medium} = thumbnails;
    const {viewCount} = statistics;
    const {duration} = contentDetails;

  return (
    <div className="rounded-t-md cursor-pointer">
      <div className="relative">
        <img src={medium.url} alt="thumbnail" className='w-full h-56 object-fill rounded-2xl'/>
        <p className="absolute bottom-3 right-8 font-bold text-white z-50">{formatDuration(duration)}</p>
      </div>
      <div className="mx-4 pb-2">
        <h6 className="text-sm font-bold mt-2">{title}</h6>
        <p className="text-sm mt-1">{channelTitle}</p>
        <p className="text-xs mt-1">{formatViews(viewCount)} Views</p>
      </div>
    </div>
  )
}

export default VideoCard;