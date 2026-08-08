import { useParams } from 'react-router-dom';
import usePlayListItems from '../customHooks/usePlayListItems';

const PlayListVideos = () => {

    const {id} = useParams();
    
    const playListVideos = usePlayListItems(id);

    if(!playListVideos) return;

    console.log(playListVideos);

    const { videoId, videoPublishedAt } = playListVideos?.contentDetails;
    const { thumbnails, title } = playListVideos?.snippet;

    return(
        <div className="absolute top-[60px] left-[18%]" >
            <div>
                <img src={thumbnails?.medium?.url} alt='playList-banner'/>
            </div>
            <div>
                <p>{title}</p>
                <p>{videoPublishedAt}</p>
                <p>{videoId}</p>
            </div>
        </div>
    )
}

export default PlayListVideos;