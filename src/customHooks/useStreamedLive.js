import { useEffect, useState } from 'react';
import { Youtube_Api_key } from '../utils/constants';

const useStreamedLive = (channelId) => {
    const [streamedVideo,setStreamedVideo] = useState(null);

    const getStreamedVideos = async() => {
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&eventType=completed&channelId=${channelId}&type=video&order=date&key=${Youtube_Api_key}`);
        const data = await res.json();
        console.log(data);
        setStreamedVideo(data);
    }

    useEffect(()=>{
        getStreamedVideos();
    },[])

    return streamedVideo;

}

export default useStreamedLive;