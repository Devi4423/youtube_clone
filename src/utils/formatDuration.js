const formatDuration = (duration) => {

    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)
    // console.log(match)
    const hours = parseInt(match[1]) || 0;
    const minutes = parseInt(match[2]) || 0;
    const seconds = parseInt(match[3]) || 0;

    // console.log(hours+"h:"+minutes+"m:"+seconds+"s")

    if(hours>0){
        return(`${hours}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`)
    }
    
    return(`${minutes}:${String(seconds).padStart(2,"0")}`)
}

export default formatDuration;