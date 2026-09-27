import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Suggesstions = ({suggesstions}) => {

    // console.log(suggesstions);
  return (
    <div className='px-3'>
      {suggesstions.map((suggesstion,index)=>(
        <Link key={index} to={"/results?search_query=" + suggesstion}>
            <div className='flex gap-2 mb-2 hover:bg-gray-300 hover:px-2 hover:py-1'>
              <span className='text-xl font-bold'><FiSearch/></span>
              <p className='text-sm font-semibold '>{suggesstion}</p>
            </div>
        </Link>
      ))}
    </div>
  )
}

export default Suggesstions;