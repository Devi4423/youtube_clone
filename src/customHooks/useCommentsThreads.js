import { useEffect, useState } from 'react';
import { Youtube_Api_key } from '../utils/constants';

const useCommentsThreads = (videoId) => {
    
    const [comments,setComments] = useState([]);
    const getCommentsThreads = async() => {
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${Youtube_Api_key}`);
        const json = await data.json();
        // console.log(json.items);
        setComments(json.items);
    }

    useEffect(()=>{
        getCommentsThreads();
    },[videoId])

    return comments;
}

export default useCommentsThreads; 