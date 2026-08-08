import usePlayList from '../customHooks/usePlayList';
import { useOutletContext, Link } from "react-router-dom";
import PlayListCard from '../channelPlayListComponents/PlayListCard';

const ChannelPlayList = () => {

    const {id} = useOutletContext();

    const playList = usePlayList(id);
    console.log(playList);

    if(!playList) return;

    const playListItems = playList?.items;

    return(
        <div className='grid grid-cols-4 gap-3 py-2'>
            {playListItems.map(item=>(
                <Link key={item.id} to={`/channel/${id}/playlist/${item.id}`}>
                    <PlayListCard item={item}/>
                </Link>
            ))}
        </div>
    )
}

export default ChannelPlayList;