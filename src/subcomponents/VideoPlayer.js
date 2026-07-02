const VideoPlayer = ({videoId}) => {
    return(
        <div>
            <iframe className="w-full h-[480px] rounded-xl" src={`https://www.youtube.com/embed/${videoId}?si=Yq4XLfc4R2NdgJjR&autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default VideoPlayer;