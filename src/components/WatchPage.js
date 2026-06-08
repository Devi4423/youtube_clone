import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../reduxStore/menuSlice";
import { useSearchParams } from 'react-router-dom';
// import Comments from './Comments';
import CommentThreads from "./CommentThreads";
import LiveChat from './LiveChat';

const WatchPage = () => {

  const [searchParams] = useSearchParams();
  // console.log(searchParams);
  const id = searchParams.get("v");
  // console.log(id)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(closeMenu())
  },[dispatch])

  return (
    <div className="w-full px-10 absolute top-[60px]">
      <div className="flex gap-5">
        <div className="w-[65%]">
          <iframe className="w-full h-[480px] rounded-xl" src={`https://www.youtube.com/embed/${id}?si=Yq4XLfc4R2NdgJjR`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="w-[35%]">
          <LiveChat/>
        </div>
      </div>
      <div className="w-[65%]">
        {/* <Comments /> */}
        <CommentThreads videoId={id}/>
      </div>
    </div>
  )
}

export default WatchPage