import useCommentsThreads from "../customHooks/useCommentsThreads";
import CommentsList from "../subcomponents/CommentsList";

const CommentThreads = ({videoId}) => {

    const comments = useCommentsThreads(videoId);

    if(!comments) return;
    console.log("Comments",comments.length)

  return (
    <div className="rounded-md">
      {comments.length === 0 ? <><h6 className="font-bold text-lg ">No Comments</h6></> : <>
        <h6 className='text-lg font-bold mb-2'>{comments.length} Comments:</h6>
        <CommentsList commentsList={comments}/>
      </>}
    </div>
  )
}

export default CommentThreads