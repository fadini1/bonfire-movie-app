import { useRecoilState } from "recoil";

import { Movie } from "@/typings";
import { modalState, movieState } from "@/atoms/modalAtom";

import Image from "next/image";

interface FilmCardProps {
  movie: Movie;
}

const FilmCard = ({ movie }: FilmCardProps) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div 
    onClick={() => {
      setCurrentMovie(movie)
      setShowModal(true);
    }} 
    className="bg-zinc-900 p-4 rounded-lg w-auto
    hover:bg-zinc-800 transition duration-300 
    lg:h-[24rem] md:h-[22rem] sm:h-[20rem]
    lg:min-w-[198px] sm:min-w-[175px] min-w-[145px]
    cursor-pointer mb-3 flex sm:flex-col items-center gap-4">
      <Image 
        className="object-cover rounded-full 
        lg:h-[10rem] lg:w-[10rem] md:h-[9rem] md:w-[9rem] 
        sm:h-[8rem] sm:w-[8rem] h-[7rem] w-[7rem]
        border-[3px] border-zinc-500 hover:border-zinc-100 transition duration-300"
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt="FilmCardImage"
        width={20000}
        height={20000}
      />
      <div className="lg:text-xl text-lg text-center bg-zinc-800/60 
      px-4 py-1 rounded-lg hover:bg-zinc-700/60 transition duration-300">
        {movie.title || movie.original_name || movie.name}
      </div>
    </div>
  )
}

export default FilmCard;