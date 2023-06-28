import { useRef, useState } from "react";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

import { Movie } from "@/typings";

import FilmCard from "./FilmCard";

interface FilmRowProps {
  title: string;
  movies: Movie[];
}

const FilmRow = ({ title, movies }: FilmRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      
      const scrollTo = 
      direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth
      rowRef.current.scrollTo({ 
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className="lg:px-16 md:px-12 sm:px-9 px-8 use-trebuchet py-8 group text-zinc-300
    flex flex-col lg:gap-6 sm:gap-4 gap-2">
      <div className=" lg:text-3xl sm:text-2xl text-xl text-center 
      group-hover:text-black transition duration-300 ease-in-out 
      font-semibold bg-cyan-500 w-fit rounded-full px-5 py-2 
      text-zinc-900 hover:bg-cyan-400">
        {title}
      </div>
      <div className="flex items-center relative">
        <BiChevronsLeft
        onClick={() => handleClick('left')} 
        className={`h-16 w-16 cursor-pointer duration-300
        hover:scale-125 opacity-0 transition group-hover:opacity-100
        hover:text-zinc-50 absolute left-0 sm:block hidden
        ${!isMoved && 'hidden'}`} />

        <div 
        ref={rowRef}
        className="flex sm:flex-row flex-col gap-x-2 sm:gap-y-4 gap-y-0.5 mt-2 
        sm:overflow-x-scroll overflow-y-scroll sm:max-h-none max-h-[30rem]
        scrollbar-thin scrollbar-thumb-cyan-400"> 
          {movies.map((movie) => (
            <FilmCard 
              key={movie.id} 
              movie={movie}
            />
          ))}
        </div>

        <BiChevronsRight
        onClick={() => handleClick('right')}  
        className="h-16 w-16 cursor-pointer duration-300
        hover:scale-125 opacity-0 transition group-hover:opacity-100
        hover:text-zinc-50 absolute right-0 sm:block hidden" />
      </div>
    </div>
  )
}

export default FilmRow;