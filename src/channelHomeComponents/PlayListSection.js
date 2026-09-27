import usePlayListItems from '../customHooks/usePlayListItems';
import VideoFlowCard from '../channelHomeComponents/VideoFlowCard';

const PlayListSection = ({playListId,title}) => {

    const playListVideos = usePlayListItems(playListId);

    if(!playListVideos) return;

    // console.log(playListVideos);
    const playListVideoItems = playListVideos.items;


  return (
    <div>
        <VideoFlowCard title={title} items={playListVideoItems}/>
    </div>
  )
}

export default PlayListSection