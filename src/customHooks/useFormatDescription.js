import { useNavigate, Link } from "react-router-dom";
import convertTimeStampstoSeconds from "../utils/convertTimeStampstoSeconds";

const useFormatDescription = (info) => {
    const navigate = useNavigate();

    if(!info) return;
    // console.log(info);

    const {description} = info?.snippet;

  const urlRegEx = /https?:\/\/[^\s]+/;
  const timestampRegex = /\b(\d{1,2}:)?\d{1,2}:\d{2}\b/;
  const hashtagRegex = /#\w+/;
  const mentionRegex = /@[A-Za-z0-9_.-]+/;

  const regEx =
    /(https?:\/\/[^\s]+)|(\b(\d{1,2}:)?\d{1,2}:\d{2}\b)|(#\w+)|(@[A-Za-z0-9_.-]+)/g;
  const parts = description.split(regEx);

  const handleTimeStamps = (timestamp) => {
    const seconds = convertTimeStampstoSeconds(timestamp);
    navigate(`/watch?v=${info.id}&t=${seconds}`);
  };

  const formattedDescription = parts.map((part, index) => {
    if (urlRegEx.test(part)) {
      return (
        <a
          href={part}
          key={index}
          target="_blank"
          rel="noopeer noreferrer"
          className="text-blue-600 underline"
        >
          {part}
        </a>
      );
    } else if (timestampRegex.test(part)) {
      return (
        <button
          key={index}
          className="text-blue-600"
          onClick={() => handleTimeStamps(part)}
        >
          {part}
        </button>
      );
    } else if (hashtagRegex.test(part)) {
      return (
        <Link key={index} to={`/results?search_query=${part.slice(1)}`}>
          {part}
        </Link>
      );
    } else if (mentionRegex.test(part)) {
      return (
        <Link key={index} to={`/results?search_query=${part}`}>
          {part}
        </Link>
      );
    } else {
      return <span key={index}>{part}</span>;
    }
  });
  return formattedDescription;
};

export default useFormatDescription;