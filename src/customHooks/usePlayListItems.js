import { useEffect, useState } from "react";
import { Youtube_Api_key } from '../utils/constants'

const usePlayListItems = (uploadId) => {

    const [playListItems,setPlayListItems] = useState(null);

    const getPlayListItems = async() => {
        try{
            const res = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${uploadId}&key=${Youtube_Api_key}`);
            const data = await res.json();
            // console.log(data);
            setPlayListItems(data);
        }
        catch(error){
            console.log("Error Fetching API", error)
        }
    }

    useEffect(()=>{
        getPlayListItems();
    },[uploadId])

    return playListItems;
}

export default usePlayListItems;