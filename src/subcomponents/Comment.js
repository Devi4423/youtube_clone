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
        <>
        <div className=" hidden lg:flex lg:gap-2 lg:mb-3 lg:p-2 lg:rounded-lg lg:items-center 2xl:gap-4">
            <div className='w-10 2xl:w-20'>
                {authorProfileImageUrl && <img src={authorProfileImageUrl} alt='authorProfile' className="w-full h-full rounded-full object-contain"/>}
            </div>
            <div className="overflow-hidden">
                <p className="text-sm text-gray-700 2xl:text-2xl">{authorDisplayName}</p>
                <p className="text-sm 2xl:text-2xl">
                    {isReadMore ? textOriginal : commentText}
                    {textOriginal?.length > 150 && (
                        <>{commentText} <span className="font-bold cursor-pointer" onClick={()=>setIsReadMore(!isReadMore)}>{isReadMore ? " Show Less..." : " Read More..."}</span></>
                    )}
                </p>
                <p className='text-sm text-gray-600 font-semibold 2xl:text-xl'>{formatPublishedat(publishedAt)}</p>
                {totalReplyCount>=0 && <p className='text-sm cursor-pointer text-gray-600 2xl:text-xl 2xl:font-semibold' onClick={()=>handleOpenId(comment.id)}> {totalReplyCount} Reply</p>}
            </div>
        </div>
        <div className="lg:hidden flex gap-3 items-start mb-4">
            <div className='w-7'>
                <img src={authorProfileImageUrl} alt='authorlogo' className='w-full rounded-full'/>
            </div>
            <div>
                <p className='text-xs text-gray-500 mb-1'>{authorDisplayName} . {formatPublishedat(publishedAt)}</p>
                <p className='text-xs font-semibold'>{textOriginal}</p>
                {totalReplyCount > 0 &&<p className='text-xs font-bold text-gray-600' onClick={()=>handleOpenId(comment.id)}>{totalReplyCount === 1? `${totalReplyCount} Reply` : `${totalReplyCount} Replies `}</p>}
            </div>
        </div>
        </>
    )
}

export default Comment;