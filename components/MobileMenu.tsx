import { AiFillHome, AiFillStar, AiFillEye } from 'react-icons/ai';
import { IoMdFilm } from 'react-icons/io';
import { GiFilmProjector } from 'react-icons/gi';
import { HiLanguage } from 'react-icons/hi2';

interface MobileMenuProps {
  visible?: boolean;
} 

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className='absolute sm:top-11 sm:left-0 top-9 left-2'>
      <div className='flex flex-col use-trebuchet lg:text-lg 
      sm:text-base text-sm'>
        <div className='mobileMenu rounded-t-lg flex items-center gap-2'>
          <AiFillHome className='lg:h-7 lg:w-7 sm:h-6 sm:w-6 h-5 w-5' />
          Home
        </div>    
        <div className='mobileMenu flex items-center gap-2'>
          <IoMdFilm className='lg:h-7 lg:w-7 sm:h-6 sm:w-6 h-5 w-5' />
          Series
        </div>   
        <div className='mobileMenu flex items-center gap-2'>
          <GiFilmProjector className='lg:h-7 lg:w-7 sm:h-6 sm:w-6 h-5 w-5' />
          Films
        </div>   
        <div className='mobileMenu flex items-center gap-2'>
          <AiFillStar className='lg:h-7 lg:w-7 sm:h-6 sm:w-6 h-5 w-5' />
          Trending
        </div>  
        <div className='mobileMenu flex items-center gap-2'>
          <AiFillEye className='lg:h-7 lg:w-7 sm:h-6 sm:w-6 h-5 w-5' />
          My Watchlist
        </div>  
        <div className='mobileMenu flex items-center gap-2 rounded-b-lg'>
          <HiLanguage className='lg:h-7 lg:w-7 sm:h-6 sm:w-6 h-5 w-5' />
          Search by Language
        </div>   
      </div>
    </div>
  )
}

export default MobileMenu;