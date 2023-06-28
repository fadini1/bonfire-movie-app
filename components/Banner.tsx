import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlinePlayCircle } from 'react-icons/ai';

import { Movie } from "@/typings";
import { baseUrl } from '@/constants/movie';
import { modalState, movieState } from '@/atoms/modalAtom';

import Image from 'next/image';

interface BannerProps {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: BannerProps) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);


  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(movie);

  return (
    <div className='relative'>
      <div>
        <Image
          className='h-[100vh] w-full object-cover -z-10 opacity-60' 
          src={`${baseUrl}/${movie?.backdrop_path || movie?.poster_path}`}
          alt='BannerImage'
          width={2000}
          height={2000}
        />
      </div>
      <div className='lg:top-[15%] sm:top-[14%] top-[13%] lg:ml-[70px] md:ml-14 ml-10 absolute'>    
        <h1 className='text-4xl sm:text-5xl lg:text-6xl use-trebuchet
        font-bold text-white lg:max-w-xl sm:max-w-md max-w-[340px]'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='text-lg md:text-xl sm:max-w-md
        max-w-xs mt-1 ml-1 use-trebuchet text-white'>
          {movie?.overview}
        </div>
        <div className='flex gap-1'>
          {/* <button className='ml-1 bg-cyan-200 px-4 py-1.5 rounded-lg mt-3
          hover:bg-cyan-300 transition duration-300 text-black
          focus:outline-none use-trebuchet font-medium flex items-center 
          gap-2 bg-opacity-60 lg:text-xl sm:text-lg'>
            <AiOutlinePlayCircle
              className='sm:h-6 sm:w-6 h-5 w-5'
            />
            Play
          </button> */}
          <button
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true);
          }} 
          className='ml-1 bg-cyan-600 px-4 py-1.5 rounded-lg mt-3
          hover:bg-cyan-500 transition duration-300 text-black
          focus:outline-none use-trebuchet font-medium flex items-center 
          gap-2 bg-opacity-60 lg:text-xl sm:text-lg'>
            <BsInfoCircle 
              className='lg:h-5 lg:w-5 sm:h-5 sm:w-5 h-[18px] w-[18px]'
            />
            Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner;