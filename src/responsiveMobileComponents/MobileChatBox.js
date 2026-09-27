import useCommentsThreads from "../customHooks/useCommentsThreads";
import CommentsList from '../subcomponents/CommentsList';
import { IoMdClose } from "react-icons/io";

const MobileChatBox = ({videoId,closeChatBox}) => {

    const comments = useCommentsThreads(videoId);
    if(!comments) return;

    console.log(comments);

    return(
        <div className='p-2'>
            <div className="flex justify-between items-center mb-2 px-2">
                <h6 className='text-sm font-semibold'>Comments <span className="text-gray-600">{comments.length}</span></h6>
                <button className="font-bold text-xl" onClick={()=>closeChatBox()}><IoMdClose/></button>
            </div>
            <CommentsList commentsList={comments}/>
        </div>
    )
}

export default MobileChatBox;