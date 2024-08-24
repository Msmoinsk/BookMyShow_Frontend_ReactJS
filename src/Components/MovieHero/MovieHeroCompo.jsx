import React, { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import MovieInfo from "./MovieInfo";

const MovieHeroCompo = () => {
  const { movie } = useContext(MovieContext);

  const genres = movie.genres?.map(
        ({ name }) => name
    ).join(", ");

  return(
    <>
        <div>

        {/* Mobile and tab screen */}
          <div className="lg:hidden w-full p-10">
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Cover Poster" className="rounded" style={{ width:"calc(100% -2rem)"}} />
          </div>

          <div className="flex flex-col gap-3 px-6 lg:hidden">

            <div className="flex flex-col-reverse gap-3 px-4 my-3">
              <div className="text-black flex flex-col gap-2 md:px-4">
                <h4>4.4k ratings</h4>
                <h4>Hindi, Urdu, English, Arabic</h4>
                <h4>{movie.runtime} min | {genres} </h4>
              </div>
            </div>

            <div className="flex items-center gap-3  md:w-full text-xl px-4">
              <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                Rent $149
              </button>
              <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                Buy $499
              </button>
            </div>

          </div>

        {/* Large Screen Size  */}
          <div className="relative hidden w-full lg:block" style={{ height:'29rem' }}>
            <div className="absolute z-10 w-full h-full" 
            style={{ 
                backgroundImage: 
                "linear-gradient(90deg, rgb(34, 34, 34) 10.95%, rgb(34,34,34) 20.2%, rgba(34,34,34,0.03) 97.47%, rgb(34,34,34) 100%)" 
            }}>
              
              <div className="absolute z-30 left-24 top-10 flex items-center gap-10" >
                
                <div className="w-64 h-96">
                  <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Cover Page" className="w-full h-full rounded-lg" />
                </div>
                <div>
                  <MovieInfo /> 
                </div>

              </div>

            </div>
              <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="Backdrop Image"
              className="w-full h-full object-cover object-center" />
          </div>

        </div>

    </>
  );
};

export default MovieHeroCompo;