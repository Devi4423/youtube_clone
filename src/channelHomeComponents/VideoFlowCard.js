import { Link } from 'react-router-dom';
import UploadSection from './UploadSection';

const VideoFlowCard = ({title,items}) => {

  console.log(items)

  if(!items) return;

  return (
    <div className='mt-2'>
      <h6 className="text-lg font-semibold mb-2 ">{title}</h6>
      <div className="flex gap-3 overflow-x-scroll pb-5">
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
