import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../reduxStore/menuSlice";
import { useSearchParams } from 'react-router-dom';
// import Comments from './Comments';
import CommentThreads from "./CommentThreads";
import LiveChat from './LiveChat';
import VideoInfo from '../subcomponents/VideoInfo'
import useFetchVideo from '../customHooks/useFetchVideo';
import RecommendedVideos from "./RecommendedVideos";
import VideoPlayer from '../subcomponents/VideoPlayer';

const WatchPage = () => {

  const isMenuOpen = useSelector(store=>store.menu.isMenuOpen);

  const [searchParams] = useSearchParams();
  // console.log(searchParams);
  const id = searchParams.get("v");
  // console.log(id)

  const videoInfo = useFetchVideo(id);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(closeMenu())
  },[dispatch])

  if(!videoInfo) return;

  return (
    <>
      {isMenuOpen && <div className="bg-black min-h-[100%] w-full fixed top-[50px] z-20 bg-opacity-60"></div>}
      <div className={`w-full px-6 min-h-full relative top-[60px] z-10`}>
          <div className="flex gap-5">
            <div className="w-[65%]">
              <VideoPlayer videoId={id}/>
              <VideoInfo info={videoInfo} channelId={videoInfo.snippet?.channelId}/>  
              {/* <Comments /> */}
              <CommentThreads videoId={id}/>
            </div>
            <div className="w-[35%]">
              <LiveChat/>
              <RecommendedVideos videoInfo={videoInfo}/>
            </div>
          </div>
      </div>
    </>
  )
}

export default WatchPage;