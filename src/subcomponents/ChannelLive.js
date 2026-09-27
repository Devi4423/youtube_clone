import useStreamedLive from '../customHooks/useStreamedLive';
import { useOutletContext, Link } from 'react-router-dom';
import LiveCard from '../channelLiveComponents/LiveCard';

const ChannelLive = () => {
    const {id} = useOutletContext();
    const streamedLive = useStreamedLive(id);

    if(!streamedLive) return;
    // console.log(streamedLive);

    const { items } = streamedLive;
    // console.log(items);

    return(
            <div className='px-3 sm:px-5'>
                {items.map((item)=>(
                    <Link key={item?.id?.videoId} to={`/watch?v=${item?.id?.videoId}`}>
                        <LiveCard item={item} />
                    </Link>
                ))}
            </div>
    )
}

export default ChannelLive;