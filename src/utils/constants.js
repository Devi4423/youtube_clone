export const Youtube_Logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png";

export const Youtube_Api_key = process.env.REACT_APP_YOUTUBE_API_KEY;

export const Youtube_Video_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+Youtube_Api_key;