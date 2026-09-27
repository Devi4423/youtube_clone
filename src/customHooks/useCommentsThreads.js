import { useEffect, useState } from 'react';
import { Youtube_Api_key } from '../utils/constants';

const useCommentsThreads = (videoId) => {
    
    const [comments,setComments] = useState([]);
    const getCommentsThreads = async() => {
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${Youtube_Api_key}`);
            const json = await response.json();
            if(!response.ok){
                console.log("Youtube API Error",{
                    status:response.status,
                    message:json?.error?.message,
                    reason:json?.error?.errors?.[0]?.reason
                });
            }
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