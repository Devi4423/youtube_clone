import { useEffect, useState } from 'react';
import VideoCard from '../subcomponents/VideoCard';
import { Youtube_Video_API } from '../utils/constants';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

    const [videos,setVideos] = useState(null);

    const getVideos = async() => {
        const data = await fetch(Youtube_Video_API);
        const json = await data.json();
        // console.log(json.items);
        setVideos(json.items);
    }

    useEffect(()=>{
        getVideos();
    },[])

    if(!videos) return 

  return (
    <div className="w-full min-w-0 grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-3 sm:px-7 lg:grid-cols-3 lg:gap-x-2 lg:px-3 xl:grid-cols-4 xl:gap-x-3">
        {videos.map(video=>(
            <Link key={video.id} to={"/watch?v="+video.id}>
                <VideoCard video={video}/>
            </Link>   
        ))}
    </div>
  )
}

export default VideoContainer;