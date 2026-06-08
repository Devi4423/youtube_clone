import { useEffect,useState } from 'react';
import { Youtube_Api_key } from '../utils/constants';
import SearchVideoCard from '../subcomponents/SearchVideoCard';
import { Link, useSearchParams } from 'react-router-dom';

const Search = () => {

    const [searchVideos,setSearchVideos] = useState(null);
    console.log(searchVideos);

    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search_query");

    const getSearchVideos = async () => {
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${Youtube_Api_key}`);
        const json = await data.json();
        // console.log(json);
        setSearchVideos(json.items);
    }

    useEffect(()=>{
        getSearchVideos();
    },[searchQuery])

    if(!searchVideos) return;

    return(
        <div className="text-black absolute top-[60px] left-[16%] px-10">
            {searchVideos.map(video => 
                <Link key={video.id.videoId} to={'/watch?v='+video.id.videoId} >
                    <SearchVideoCard  video={video} channelId={video.snippet?.channelId} videoId={video.id.videoId} />
                </Link>
            )}
        </div>
    )
}

export default Search;