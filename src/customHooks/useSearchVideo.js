import { useState, useEffect } from 'react';
import { Youtube_Api_key } from '../utils/constants';

const useSearchVideo = (searchQuery) => {

    const [searchVideos,setSearchVideos] = useState(null);

    const getSearchVideos = async () => {
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&key=${Youtube_Api_key}`);
        const json = await data.json();
        // console.log(json);
        setSearchVideos(json.items);
    }

    useEffect(()=>{
        getSearchVideos();
    },[searchQuery])

    return searchVideos;
}

export default useSearchVideo;