import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../reduxStore/menuSlice";
import { useSearchParams } from "react-router-dom";
// import Comments from './Comments';
import CommentThreads from "./CommentThreads";
import LiveChat from "./LiveChat";
import VideoInfo from "../subcomponents/VideoInfo";
import useFetchVideo from "../customHooks/useFetchVideo";
import RecommendedVideos from "./RecommendedVideos";
import VideoPlayer from "../subcomponents/VideoPlayer";
import MobileDescription from "../responsiveMobileComponents/MobileDescription";
import MobileChatBox from "../responsiveMobileComponents/MobileChatBox";

const WatchPage = () => {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);
  const [isDescription, setIsDescription] = useState(false);
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  const [searchParams] = useSearchParams();
  // console.log(searchParams);
  const id = searchParams.get("v");
  // console.log(id)

  const videoInfo = useFetchVideo(id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:'instant'
    })
  },[id])

  if (!videoInfo) return;

  const openChatBox = () => {
    setChatBoxOpen(true);
  };

  const closeChatBox = () => {
    setChatBoxOpen(false);
  };

  const openDescription = () => {
    setIsDescription(true);
  };

  const closeDescription = () => {
    setIsDescription(false);
  };

  return (
    <>
      {isMenuOpen && (
        <div className="bg-black min-h-[100%] w-full fixed top-[50px] z-20 bg-opacity-60 2xl:top-[80px] "></div>
      )}
      <main className="w-full min-h-full min-w-0 relative z-10 top-[40px] md:px-2 lg:top-[60px] lg:px-4 xl:px-6 2xl:top-[80px]">
        <div className={`max-w-[1536px] mx-auto`}>
            <div className='w-full aspect-video'>
              <VideoPlayer videoId={id}/>
            </div>
            <div className="hidden md:flex md:gap-2 lg:gap-5">
              <div className='md:w-[65%] lg:w-[63%] xl:w-[65%] 2xl:w-[60%]'>
                <VideoInfo
                  info={videoInfo}
                  channelId={videoInfo.snippet?.channelId}
                />
                <CommentThreads videoId={id} openChatBox={openChatBox}/>
              </div>
              <div className="md:w-[35%] lg:w-[37%] xl:w-[35%] 2xl:w-[40%]">
                <LiveChat />
                <RecommendedVideos videoInfo={videoInfo} />
              </div>
            </div>
          <div className="w-full md:hidden">
            {chatBoxOpen ? (
              <MobileChatBox videoId={id} closeChatBox={closeChatBox} />
            ) : isDescription ? (
              <MobileDescription videoInfo={videoInfo} closeDescription={closeDescription}/>
            ) : (
              <div>
                <VideoInfo
                  info={videoInfo}
                  channelId={videoInfo.snippet?.channelId}
                  openDescription={openDescription}
                />
                {/* <Comments /> */}
                <CommentThreads videoId={id} openChatBox={openChatBox} />
                <RecommendedVideos videoInfo={videoInfo} />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default WatchPage;
