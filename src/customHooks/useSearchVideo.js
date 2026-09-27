import { useState, useEffect } from 'react';
import { Youtube_Api_key } from '../utils/constants';

const useSearchVideo = (searchQuery) => {

    const [searchVideos,setSearchVideos] = useState(null);

    const getSearchVideos = async () => {
        try{
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&key=${Youtube_Api_key}`);
            if(!response.ok){
                console.log("Youtube API Error",response.status,response.statusText);
            }
            const json = await response.json();
            // console.log(json);
            setSearchVideos(json.items);
        }
        catch(error){
            console.log("Networking parsing error", error);
        }
    }

    useEffect(()=>{
        getSearchVideos();
    },[searchQuery])

    return searchVideos;
}

export default useSearchVideo;