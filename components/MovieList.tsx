import { isEmpty } from "lodash";

import React from "react";

import MovieCard from "./MovieCard";

interface MovieListProps {
  title: string;
  data: Record<string, any>[];
}

const MovieList: React.FC<MovieListProps> = ({ title, data }) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-32 mt-4 ">
      <div>
        <div className="text-2xl text-white">
          {title}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie) => (
            <MovieCard 
              key={movie.id}
              data={movie}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList;