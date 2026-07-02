import { useState } from 'react';
import formatPublishedat from '../utils/formatPublishedat';

const Comment = ({comment,handleOpenId}) => {

    const [isReadMore,setIsReadMore] = useState(false);

    if(!comment) return;

    const commentSnippet = comment.snippet?.topLevelComment?.snippet || comment.snippet;

    const {totalReplyCount } = comment.snippet;


    if(!commentSnippet) return;

    const {authorProfileImageUrl, authorDisplayName, textOriginal, publishedAt} =  commentSnippet

    const commentText = textOriginal?.slice(0,100);

    return(
        <div className="flex gap-2 mb-3 bg-white p-2 rounded-lg items-center">
            <div className='w-10 h-10'>
                {authorProfileImageUrl && <img src={authorProfileImageUrl} alt='authorProfile' className="w-full h-full rounded-full object-cover"/>}
            </div>
            <div className="overflow-hidden">
                <p className="text-sm text-gray-700">{authorDisplayName}</p>
                <p className="text-sm">
                    {isReadMore ? textOriginal : commentText}
                    {textOriginal?.length > 150 && (
                        <>{commentText} <span className="font-bold cursor-pointer" onClick={()=>setIsReadMore(!isReadMore)}>{isReadMore ? " Show Less..." : " Read More..."}</span></>
                    )}
                </p>
                <p className='text-sm text-gray-600'>{formatPublishedat(publishedAt)}</p>
                {totalReplyCount>=0 && <p className='text-sm cursor-pointer text-gray-600' onClick={()=>handleOpenId(comment.id)}> {totalReplyCount} Reply</p>}
            </div>
        </div>
    )
}

export default Comment;