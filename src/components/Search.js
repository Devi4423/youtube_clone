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
        <main className={`text-black absolute min-w-0 top-[60px] bottom-0 right-0 px-0 sm:px-5 md:px-5 2xl:top-[80px] ${isMenuOpen?"md:left-[180px] xl:left-[240px] ":"md:left-0"}`}>
            <div className='max-w-[1536px] w-full mx-auto'>
                {searchVideos.map(video => 
                    <Link key={video.id.videoId} to={'/watch?v='+video.id.videoId} >
                        <SearchVideoCard  video={video} channelId={video.snippet?.channelId} videoId={video.id.videoId} />
                    </Link>
                )}
            </div>
        </main>
    )
}

export default Search;