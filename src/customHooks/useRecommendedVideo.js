import { useEffect, useState } from "react";
import { Youtube_Api_key } from "../utils/constants";

const useRecommendedVideo = (searchQuery) => {

    const [recommendedVideos,setRecommendedVideos] = useState(null);

    const  getRecommendedVideos = async() => {
        try{
             const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${encodeURIComponent(searchQuery)}&type=video&key=${Youtube_Api_key}`);
             if(!response.ok){
                console.log("Youtube API Error",response.status,response.statusText);
             }
             const json = await response.json();
            //  console.log(json);
             setRecommendedVideos(json.items);
        }
        catch(error){
            console.log("Network or Parsing Error", error)
        }
    }

    useEffect(()=>{
        if(!searchQuery) return;
        getRecommendedVideos();
    },[searchQuery])

    return recommendedVideos;

}
export default useRecommendedVideo;