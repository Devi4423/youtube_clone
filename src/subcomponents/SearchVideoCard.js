import useFetchChannel from '../customHooks/useFetchChannel'
import useFetchVideo from '../customHooks/useFetchVideo';
import formatDuration from '../utils/formatDuration';

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
    const {duration} = contentDetails;
    // console.log(duration);

    const formattedDuration = formatDuration(duration);
    console.log(formattedDuration);

    return(
        <div className="grid grid-cols-2 gap-5 mb-5 cursor-pointer">
            <div className="w-[480px] relative">
                <img src={medium.url} alt="video" className="w-full object-contain rounded-lg " />
                <p className={`absolute bottom-3 right-4 text-white font-bold bg-black bg-opacity-60 px-2 py-1 rounded-md ${formattedDuration === "Live" ? "bg-red-500 bg-opacity-20" : "bg-none"}`} >{formattedDuration}</p>
            </div>
            <div className="mt-2">
                <p className="font-bold text-lg mb-2">{title}</p>
                <div className='flex gap-2 items-center mb-2'>
                    <img src={channelInfo.snippet?.thumbnails?.medium?.url} alt='channelLogo' className=" w-14"/>
                    <p>{channelTitle}</p>
                </div>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    )
}

export default SearchVideoCard;