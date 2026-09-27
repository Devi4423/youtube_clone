const VideoPlayer = ({videoId}) => {
    if(!videoId) return null;

    return(
        <div className='w-full aspect-video'>
            <iframe className='w-full h-full md:rounded-xl' src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default VideoPlayer;