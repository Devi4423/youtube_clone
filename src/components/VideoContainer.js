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
    <div className="grid grid-cols-3 gap-y-5 gap-x-5 px-10">
        {videos.map(video=>(
            <Link key={video.id} to={"/watch?v="+video.id}>
                <VideoCard video={video}/>
            </Link>   
        ))}
    </div>
  )
}

export default VideoContainer;