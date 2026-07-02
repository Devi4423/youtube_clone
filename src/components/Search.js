import SearchVideoCard from '../subcomponents/SearchVideoCard';
import { Link, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useSearchVideo from '../customHooks/useSearchVideo';
import { openMenu } from '../reduxStore/menuSlice';
import { useEffect } from 'react';

const Search = () => {

    const isMenuOpen = useSelector(store=>store.menu.isMenuOpen)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(openMenu());
    },[dispatch])

    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search_query");

    const searchVideos = useSearchVideo(searchQuery);

    if(!searchVideos) return;
    // console.log(searchVideos);

    return(
        <div className={`text-black absolute top-[60px] px-10 ${isMenuOpen?"left-[16%]":"left-0"} `}>
            {searchVideos.map(video => 
                <Link key={video.id.videoId} to={'/watch?v='+video.id.videoId} >
                    <SearchVideoCard  video={video} channelId={video.snippet?.channelId} videoId={video.id.videoId} />
                </Link>
            )}
        </div>
    )
}

export default Search;