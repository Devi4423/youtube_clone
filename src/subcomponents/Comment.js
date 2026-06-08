const Comment = ({comment}) => {

    if(!comment) return;

    const {authorDisplayName,authorProfileImageUrl,textOriginal} = comment.snippet.topLevelComment?.snippet
    return(
        <div className="flex gap-2 mb-5 bg-white p-2 rounded-lg items-start">
            <div className='w-10 h-10'>
                {authorProfileImageUrl && <img src={authorProfileImageUrl} alt='authorProfile' className="w-full h-full rounded-full object-cover"/>}
            </div>
            <div className="overflow-hidden">
                <p className="text-sm text-gray-700">{authorDisplayName}</p>
                <p className="text-sm font-semibold ">{textOriginal}</p>
            </div>
        </div>
    )
}

export default Comment;