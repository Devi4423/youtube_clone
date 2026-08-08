import useSearchVideo from '../customHooks/useSearchVideo';
import RecommendedVideoCard from '../subcomponents/RecommendedVideoCard';
import { Link } from 'react-router-dom';

const RecommendedVideos = ({videoInfo}) => {

    // console.log(videoInfo);

    const tags = videoInfo?.snippet?.tags;
    const query = tags[0];

    const recommendedVideos = useSearchVideo(query)

    if(!recommendedVideos) return;

    // console.log(recommendedVideos);

    return(
        <div className='mt-5'>
           {recommendedVideos.map(video =>
                <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
                    <RecommendedVideoCard video={video}/>
                </Link> 
           )}
        </div>
    )
}

export default RecommendedVideos;