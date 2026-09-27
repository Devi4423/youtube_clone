import usePlayList from '../customHooks/usePlayList';
import { useOutletContext, Link } from "react-router-dom";
import PlayListCard from '../channelPlayListComponents/PlayListCard';

const ChannelPlayList = () => {

    const {id} = useOutletContext();

    const playList = usePlayList(id);
    // console.log(playList);

    if(!playList) return;

    const playListItems = playList?.items;

    return(
        <div className='grid gap-3 py-2 px-3 sm:grid-cols-4 md:px-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {playListItems.map(item=>(
                <Link key={item.id} to={`/channel/playlist/${item.id}`}>
                    <PlayListCard item={item}/>
                </Link>
            ))}
        </div>
    )
}

export default ChannelPlayList;