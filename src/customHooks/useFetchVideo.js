import { useEffect, useState } from 'react';
import { Youtube_Api_key } from '../utils/constants';

const useFetchVideo = (videoId) => {

    const [videoData,setVideoData] = useState(null);
    
    const fetchVideo = async() => {
        try{
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${Youtube_Api_key}`);
            const json = await response.json();
            if(!response.ok){
                console.log("Youtube API Error",{
                    status:response.status,
                    message:json?.error?.message,
                    reason:json?.error?.errors?.[0]?.reason
                })
            }
            // console.log(json);
            setVideoData(json?.items?.[0]);
        }
        catch(error){
            console.log("Networking or Parsing Error", error)
        }
    }

    useEffect(()=> {
        fetchVideo();
    },[videoId])

    return videoData;
}

export default useFetchVideo;