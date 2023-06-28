import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";

import { GrFormClose } from "react-icons/gr";
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { 
  AiOutlinePlayCircle, 
  AiOutlinePlusCircle, 
  AiFillStar 
} from "react-icons/ai";

import { Element, Genre } from "@/typings";
import { modalState, movieState } from '@/atoms/modalAtom';

import ReactPlayer from "react-player/lazy";

import MuiModal from '@mui/material/Modal';

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState('');
  const [genres, setGenres] = useState<Genre[]>([]);
  const [muted, setMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!movie) {
      return;
    }

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      ).then((response) => response.json())
      .catch((error) => console.log(error));

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === 'Trailer'
        );
        setTrailer(data.videos?.results[index]?.key)
      }

      if (data?.genres) {
        setGenres(data.genres);
      }
    }

    fetchMovie();
  }, [movie]);

  const handleClose = () => {
    setShowModal(false);
  }

  const handleLike = () => {
    setIsLiked((value) => !value);
  }

  return (
    <MuiModal 
    open={showModal} 
    onClose={handleClose} 
    className="relative !top-4 !mx-auto w-full max-w-4xl">
      <>     
        <div className="relative md:pt-[40%] pt-[50%]">
          <ReactPlayer 
            playing
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width='100%'
            height='100%'
            muted={muted}
            style={{
              position: 'absolute',
              top: '0',
              left: '0'
            }}
          />
          <div className="absolute bottom-2 flex items-center justify-between
          w-full px-6">
            {/* <div className="flex gap-2">
              <button className="flex gap-2 bg-cyan-100 md:px-5 px-3 
              text-black rounded-lg use-trebuchet items-center 
              hover:bg-cyan-300 transition duration-300 md:py-2 py-0.5">
                <AiOutlinePlayCircle 
                  className="lg:h-7 lg:w-7 sm:h-6 sm:w-6 h-5 w-5"
                />
                <div className="lg:text-xl text-lg" >
                  Play 
                </div>
              </button>
              <button className="flex gap-2 bg-cyan-500 px-5
              text-black rounded-lg use-trebuchet items-center
              hover:bg-cyan-400 transition duration-300 md:py-2 py-0.5">
                <AiOutlinePlusCircle 
                  className="lg:h-7 lg:w-7 sm:h-6 sm:w-6 h-5 w-5"
                />
                <div className="lg:text-xl text-lg">
                  Add to Watchlist 
                </div>
              </button>
              <button
              onClick={handleLike} 
              className={`p-2 text-black 
              rounded-full use-trebuchet items-center duration-300
              hover:bg-cyan-100 transition
              ${isLiked ? 'bg-red-500' : 'bg-zinc-100/50'}`}>
                {isLiked ? (
                  <MdOutlineFavorite
                    className="lg:h-7 lg:w-7 sm:h-6 sm:w-6 h-5 w-5"
                  /> 
                ) : (
                  <MdOutlineFavoriteBorder
                    className="lg:h-7 lg:w-7 sm:h-6 sm:w-6 h-5 w-5"
                  />  
                )} 
              </button>
            </div> */}
            <div className="flex gap-2">
              <button 
              onClick={handleClose}
              className="p-2 text-black rounded-full items-center 
              duration-300 hover:bg-zinc-600 transition bg-zinc-100/50
              outline-none">
              <GrFormClose
                className="lg:h-7 lg:w-7 sm:h-6 sm:w-6 h-5 w-5"
              />
              </button>
              <button
              onClick={() => setMuted((value) => !value)} 
              className={`p-2 text-black rounded-full items-center 
              duration-300 hover:bg-cyan-100 transition bg-zinc-100/50
              outline-none
              ${muted ? 'bg-zinc-500/50' : 'bg-zinc-50/50'}
              ${muted ? 'hover:bg-cyan-100' : 'hover:bg-zinc-600'}`}>
                {muted ? (
                  <IoMdVolumeOff 
                    className="lg:h-7 lg:w-7 sm:h-6 sm:w-6 h-5 w-5" 
                  />
                ) : (
                  <IoMdVolumeHigh 
                    className="lg:h-7 lg:w-7 sm:h-6 sm:w-6 h-5 w-5" 
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex rounded-b-md bg-zinc-900 px-6 py-4 ">
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <p className={`font-semibold bg-zinc-800/90 py-1 px-3 
              rounded-md hover:bg-zinc-700 transition duration-300 
              flex items-center gap-1
              ${movie!.vote_average >= 8 ? 'text-amber-400' : ''}
              ${movie!.vote_average >= 6 && movie!.vote_average < 8 
                ? 'text-green-500' 
                : ''
              }
              ${movie!.vote_average < 6 && movie!.vote_average > 4 
                ? 'text-orange-500' 
                : ''
              }
              ${movie!.vote_average <= 4 ? 'text-red-500' : ''}`}>

                {movie!.vote_average}
                <AiFillStar className="h-4 w-4" />

              </p>

              <p>
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className="bg-zinc-800 py-0.5 px-3 rounded-md font-bold
              use-trebuchet hover:bg-zinc-700 transition duration-300">
                HD
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="ml-1 mt-1">
                {movie?.overview}
              </p>
              <div className="ml-1">
                <div className="font-medium">
                  <span className="font-bold text-zinc-400">
                    Genres: {' '}
                  </span>
                  {genres.map((genre) => genre.name).join(', ')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  )
}

export default Modal;