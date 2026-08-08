import usePlayListItems from "../customHooks/usePlayListItems";
import { useOutletContext } from "react-router-dom";
// import UploadSection from "../channelHomeComponents/UploadSection";
// import useStreamedLive from "../customHooks/useStreamedLive";
import VideoFlowCard from "../channelHomeComponents/VideoFlowCard";
import usePlayList from "../customHooks/usePlayList";
import PlayListSection from '../channelHomeComponents/PlayListSection'

const ChannelHome = () => {
  const { uploads, id } = useOutletContext();
  //   console.log(uploads);

  const playList = usePlayList(id);
  // console.log("PlayList",playList);
  const playListItems = playList?.items;
  // console.log("PlayListItems",playListItems);

  const uploadList = usePlayListItems(uploads);
  const upLoadListItems = uploadList?.items;
  // console.log('upLoadListItems',upLoadListItems);

  // const streamedVideos = useStreamedLive(id);
  // const streamedVideoItems = streamedVideos?.items;
  // console.log("streamedVideoItems", streamedVideoItems);

  if (!upLoadListItems || !playListItems) return;

  const recentUploads = upLoadListItems.slice(0, 10);
  const homePlayListItems = playListItems.slice(0,5);
  console.log(homePlayListItems);

  return (
    <div>
      <VideoFlowCard title="For You" items={recentUploads}/>
      {homePlayListItems.map((item)=>(
        <PlayListSection key={item.id} playListId={item.id} title={item.snippet.title}/>
      ))}
    </div>
  );
};

export default ChannelHome;
