import useFetchChannel from '../customHooks/useFetchChannel'
import useFetchVideo from '../customHooks/useFetchVideo';
import formatDuration from '../utils/formatDuration';
import formatViews from '../utils/formatViews';
import formatPublishedat from '../utils/formatPublishedat';

const SearchVideoCard = ({video,channelId,videoId}) => {

    const videoInfo = useFetchVideo(videoId);
    // console.log("videoInfo",videoInfo);

    const channelInfo = useFetchChannel(channelId);
    if(!channelInfo) return;
    if(!videoInfo) return;
    // console.log(channelInfo);

    const {snippet} = video;
    const {title,thumbnails,description,channelTitle} = snippet;
    const {medium} = thumbnails;
    const {contentDetails} = videoInfo;
    const {publishedAt,} = videoInfo?.snippet;
    const {viewCount} = videoInfo?.statistics;
    const {duration} = contentDetails;

    const splittedDescription = description.length > 50 ? `${description.slice(0,50)}...` : description
    // console.log(duration);

    const formattedDuration = formatDuration(duration);
    // console.log(formattedDuration);

    return(
            <div className="grid sm:grid-flow-col gap-3 mb-5 cursor-pointer">
                <div className="w-full relative col-span-9 sm:col-span-3 sm:w-[310px] md:w-[270px] lg:w-[400px] xl:w-[480px] 2xl:col-span-1">
                    <img src={medium.url} alt="video" className="w-full object-contain sm:rounded-lg " />
                    <p className={`absolute bottom-3 right-4 text-sm lg:text-base text-white font-bold  px-2 py-1 rounded-md 2xl:bottom-6 2xl:right-7 ${formattedDuration === "Live" ? "bg-red-500 bg-opacity-20" : "bg-black bg-opacity-60"}`} >{formattedDuration}</p>
                </div>
                <div className='col-span-9 flex gap-2 items-start px-2 sm:hidden'>
                    <div className='w-14'>
                        <img className='w-full object-contain rounded-full' src={channelInfo?.snippet?.thumbnails?.medium?.url} alt='channelLogo'/>
                    </div>
                    <div>
                        <p className='text-sm font-semibold mb-1'>{title}</p>
                        <p className='text-xs text-gray-600'>{channelTitle} {formatViews(viewCount)} Views . {formatPublishedat(publishedAt)}</p>
                    </div>
                </div>
                <div className=" hidden sm:block sm:mt-2 sm:col-span-9 2xl:col-span-12">
                    <p className="font-semibold text-sm lg:text-lg xl:text-xl mb-2 md:mb-1 lg:mb-2">{title}</p>
                    <div className='flex gap-2 items-center mb-2 md:mb-1 lg:mb-2'>
                        <img src={channelInfo.snippet?.thumbnails?.medium?.url} alt='channelLogo' className="w-9 rounded-full lg:w-12 xl:w-14"/>
                        <p className='font-semibold text-sm lg:text-base xl:text-lg'>{channelTitle}</p>
                    </div>
                    <p className="text-xs lg:text-sm text-gray-600 mb-2 md:mb-1 lg:mb-2">{splittedDescription}</p>
                    <p className='font-semibold text-gray-600 text-xs xl:text-sm'>{formatViews(viewCount)} Views • {formatPublishedat(publishedAt)}</p>
                </div>
            </div>
    )
}

export default SearchVideoCard;