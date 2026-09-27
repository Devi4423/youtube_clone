import { useEffect, useState } from 'react';
import { Youtube_Api_key } from '../utils/constants';

const useStreamedLive = (channelId) => {
    const [streamedVideo,setStreamedVideo] = useState(null);

    const getStreamedVideos = async() => {
        try{
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&eventType=completed&channelId=${channelId}&type=video&order=date&key=${Youtube_Api_key}`);
            if(!response.ok){
                console.log("Youtube API Error",response.status,response.statusText);
            }
            const data = await response.json();
            // console.log(data);
            setStreamedVideo(data);
        }
        catch(error){
            console.log("Network Parsing Error",error)
        }
    }

    useEffect(()=>{
        getStreamedVideos();
    },[])

    return streamedVideo;

}

export default useStreamedLive;