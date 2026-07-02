const formatPublishedat = (publishedat) => {

    const publishedTime = new Date(publishedat);
    const nowDate = new Date();
    // console.log("PublishedAt",publishedTime);
    // console.log("NowDate",nowDate);

    const seconds = Math.floor((nowDate-publishedTime)/1000);
    // console.log(seconds);

    const minutes = Math.floor(seconds/60);
    const hours = Math.floor(minutes/60);
    const days = Math.floor(hours/24);
    const weeks = Math.floor(days/7);
    const months = Math.floor(days/30);
    const years = Math.floor(days/365);

    if(seconds<60) return `${seconds} seconds ago`;
    if(minutes<60) return `${minutes} minutes ago`;
    if(hours<24) return `${hours} hours ago`;
    if(days<7) return `${days} days ago`;
    if(weeks<5) return `${weeks} weeks ago`;
    if(months<12) return `${months} months ago`;
    
    return `${years} years ago`
}

export default formatPublishedat;