import useCommentsThreads from "../customHooks/useCommentsThreads";
import Comment from '../subcomponents/Comment';

const CommentThreads = ({videoId}) => {

    const comments = useCommentsThreads(videoId);
    console.log(comments);

    if(!comments) return;

  return (
    <div className="bg-slate-100 p-5 rounded-md">
      <h6 className='text-lg font-bold mb-2'>Comments:</h6>
        {comments.map((comment)=>(
            <Comment key={comment.id} comment={comment}/>
        ))}
    </div>
  )
}

export default CommentThreads