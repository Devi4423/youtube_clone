import { useEffect, useState } from 'react';
import { Youtube_Api_key } from '../utils/constants';

const useFetchVideo = (videoId) => {

    const [videoData,setVideoData] = useState(null);
    
    const fetchVideo = async() => {

        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${Youtube_Api_key}`);
        const json = await data.json();
        // console.log(json);
        setVideoData(json.items[0]);
    }

    useEffect(()=> {
        fetchVideo();
    },[videoId])

    return videoData;
}

export default useFetchVideo;