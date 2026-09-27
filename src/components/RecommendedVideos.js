import useRecommendedVideo from '../customHooks/useRecommendedVideo';
import RecommendedVideoCard from '../subcomponents/RecommendedVideoCard';
import { Link } from 'react-router-dom';

const RecommendedVideos = ({videoInfo}) => {

    // console.log(videoInfo);

    const query  = videoInfo?.snippet?.tags?.[0] || videoInfo?.snippet?.title;

    const recommendedVideos = useRecommendedVideo(query);

    if(!recommendedVideos) return;

    // console.log(recommendedVideos);

    return(
        <div className='mt-5 sm:grid sm:grid-cols-2 sm:gap-2 sm:px-2 md:block'>
           {recommendedVideos.map(video =>
                <Link key={video?.id?.videoId} to={`/watch?v=${video.id.videoId}`}>
                    <RecommendedVideoCard video={video}/>
                </Link> 
           )}
        </div>
    )
}

export default RecommendedVideos;