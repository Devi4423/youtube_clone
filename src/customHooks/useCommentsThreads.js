import { useEffect, useState } from 'react';
import { Youtube_Api_key } from '../utils/constants';

const useCommentsThreads = (videoId) => {
    
    const [comments,setComments] = useState([]);
    const getCommentsThreads = async() => {
        try {
            const data = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${Youtube_Api_key}`);
            if(!data.ok){
                const errorData = await data.json();
                console.log("Youtube API Error", errorData);
                return;
            }
            const json = await data.json();
            // console.log(json.items);
            setComments(json.items); 
        }
        catch (error) {
            console.log("Networking or Parsing error",error)   
        }
    }

    useEffect(()=>{
        getCommentsThreads();
    },[videoId])

    return comments;
}

export default useCommentsThreads; 