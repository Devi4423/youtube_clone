import { Link } from 'react-router-dom';
import UploadSection from './UploadSection';

const VideoFlowCard = ({title,items}) => {

  // console.log(items)

  if(!items) return;

  return (
    <div className='mt-2 border-b-2 border-gray-200'>
      <h6 className="font-semibold text-sm mb-2 md:text-base lg:text-base xl:text-lg">{title}</h6>
      <div className="sm:flex sm:gap-3 sm:overflow-x-auto sm:pb-5">
        {items.map((video) => (
          <Link
            key={video.snippet.resourceId.videoId}
            to={"/watch?v=" + video.snippet.resourceId.videoId}
          >
            <UploadSection video={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoFlowCard;
