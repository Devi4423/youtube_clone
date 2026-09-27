import { useState } from 'react';
import Comment from './Comment';

const CommentsList = ({commentsList}) => {

    const [openCommentId,setOpenCommentId] = useState(null);

    if(!commentsList) return;
    // console.log("commentsList",commentsList);

    const handleOpenId = (id) => {
        setOpenCommentId((prev) => prev === id ? null : id) 
    }

  return (
    <div>
        {commentsList.map((comment)=>(
            <div key={comment.id} >
                <Comment comment={comment} handleOpenId={()=>handleOpenId(comment.id)}/>
                    {openCommentId === comment.id &&
                        <div className='pl-2 ml-10 border-l border-gray-400 lg:ml-10 lg:pl-4'>
                            {comment?.replies?.comments.length > 0 && <CommentsList commentsList={comment.replies.comments}/>}
                        </div>
                    }
            </div>
        ))}
    </div>
  )
}

export default CommentsList;