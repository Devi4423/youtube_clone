import formatPublishedat from '../utils/formatPublishedat';
import useFetchVideo from '../customHooks/useFetchVideo';
import formatViews from '../utils/formatViews';
import formatDuration from '../utils/formatDuration';

const LiveCard = ({item}) => {

    const videoInfo = useFetchVideo(item?.id?.videoId);
    console.log(videoInfo);

    if(!videoInfo) return;
    // console.log(item);
    const {duration} = videoInfo?.contentDetails;
    const {title,thumbnails,publishedAt} = item?.snippet;
    const {viewCount} = videoInfo?.statistics;

    return(
        <div className='flex mb-5 gap-3'>
            <div className='w-[150px] flex-shrink-0 sm:w-[270px] md:w-[270px] lg:w-[320px] xl:w-[360px] aspect-video relative'>
                <img className='w-full h-full rounded-lg' src={thumbnails?.medium.url} alt='video'/>
                <p className='absolute bottom-2 right-2 sm:bottom-3 sm:right-3 text-white font-semibold text-xs sm:text-sm xl:text-base bg-black bg-opacity-70 px-2 py-1 rounded-md'>{formatDuration(duration)}</p>
            </div>
            <div className=''>
                <h6 className='text-[0.70rem] leading-[0.90rem] sm:text-sm xl:text-lg font-semibold mb-0.5 line-clamp-3 sm:line-clamp-none'>{title}</h6>
                <p className=' text-[0.65rem] sm:text-xs xl:text-base text-gray-500'>{formatViews(viewCount)} Views <span>.</span> Streamed {formatPublishedat(publishedAt)}</p>
            </div>
        </div>
    )
}

export default LiveCard;