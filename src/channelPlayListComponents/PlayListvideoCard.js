import formatViews from "../utils/formatViews";
import formatPublishedAt from "../utils/formatPublishedat";
import useFetchVideo from "../customHooks/useFetchVideo";
import formatDuration from '../utils/formatDuration';

const PlayListvideoCard = ({ item }) => {
  const video = useFetchVideo(item?.snippet?.resourceId?.videoId);

  if (!item || !video) return;
  // console.log(video);
  // console.log(item);

  const { thumbnails, publishedAt, title } = item?.snippet;
  const { viewCount } = video?.statistics;
  const { duration } = video?.contentDetails;

  return (
    <div>
      <div className="w-full relative">
        <img
          className="w-full object-contain sm:rounded-lg"
          src={thumbnails?.medium?.url}
          alt="video-banner"
        />
        <p className='absolute bottom-3 right-3 bg-black bg-opacity-60 px-2 py-1 text-white font-semibold rounded-md text-sm'>{formatDuration(duration)}</p>
      </div>
      <div className='px-3 sm:px-0'>
        <h6 className="font-semibold my-1 leading-snug text-sm xl:text-sm">{title}</h6>
        <p className="text-xs text-gray-600">
          {formatPublishedAt(publishedAt)} . {formatViews(viewCount)} Views
        </p>
      </div>
    </div>
  );
};

export default PlayListvideoCard;
