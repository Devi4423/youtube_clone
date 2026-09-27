import useCommentsThreads from "../customHooks/useCommentsThreads";
import CommentsList from "../subcomponents/CommentsList";

const CommentThreads = ({ videoId,openChatBox }) => {
  const comments = useCommentsThreads(videoId);

  if (!comments) return;
  // console.log("Comments",comments);

  const firstComment = comments[0];
  // console.log("firstComment",firstComment);

  if(!firstComment) return;

  const {authorProfileImageUrl, textOriginal} = firstComment?.snippet?.topLevelComment?.snippet
  

  return (
    <>
    <div className="hidden md:block md:rounded-md">
      {comments.length === 0 ? (
        <>
          <h6 className=" lg:font-bold lg:text-lg 2xl:text-3xl ">No Comments</h6>
        </>
      ) : (
        <>
          <h6 className="lg:text-lg lg:font-bold lg:mb-2 2xl:text-3xl">
            Comments {comments.length}:
          </h6>
          <CommentsList commentsList={comments} />
        </>
      )}
    </div>
    <div className=' bg-gray-100 p-2 md:hidden rounded-lg w-[93%] mx-auto' onClick={openChatBox}>
      <h6 className="text-xs font-semibold mb-2">Comments <span className="text-gray-600">{comments.length}</span></h6>
      <div className="flex gap-2 items-center">
        <img className='rounded-full w-7' src={authorProfileImageUrl} alt='channelLogo'/>
        <p className="text-xs text-gray-700">{textOriginal.length>100 ? `${textOriginal.slice(0,100)}...` : textOriginal}</p>
      </div>
    </div>
    </>
  );
};

export default CommentThreads;
