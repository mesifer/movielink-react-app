import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieWrapper from './movies/MovieWrapper';
import SeriesWrapper from './series/SeriesWrapper';
import tmdb from './tmdb';
export default function ListMovie() {
    const { pathname } = useLocation();

    const [movies, setMovies] = useState([]);
    const [latestMovie, setLatestMovies] = useState([]);
    const [tvSeries, setTvSeries] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({});

    useEffect(() => {
        const fetchMovies = async () => {
            const {
                data: { results },
            } = await tmdb.get('trending/movie/day');
            const dataTv = await tmdb.get('/trending/tv/week');
            const dataLatestMovie = await tmdb.get('/movie/now_playing');
            setLatestMovies(dataLatestMovie.data.results);
            setMovies(results);
            setTvSeries(dataTv.data.results);
        };
        fetchMovies();
    }, [pathname]);
    console.log('path: ', pathname);

    return (
        <div className="">
            {/* RECOMENDED MOVIES */}
            <div className="px-2 pt-20">
                <div className="md:px-8 min-[360px]:px-4 gap-x-12 items-center flex font-normal">
                    <div className="text-gray-500 text-3xl">Recomended</div>
                    {/* <div className="flex gap-x-4 text-sm  text-white">
                        <div className="bg-green-600 px-4 py-2 rounded-md">Movies</div>
                        <div className="bg-gray-700 text-white/30 px-4 py-2 rounded-md">TV Shows</div>
                    </div> */}
                </div>
                <div className="Movie-container text-white">
                    <div className="Movie-wrapper flex flex-wrap gap-y-3">
                        {movies.map((movie, index) => {
                            return (
                                <div className="flex min-[1440px]:w-[12.5%] lg:w-[16.6%] md:w-[25%] min-[320px]:w-[50%] px-[5px] py-8 flex-col cursor-pointer hover:scale-[1.02] duration-150">
                                    <MovieWrapper key={index} movie={movie} {...movie} selectedMovie={setSelectedMovie} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* LATEST MOVIES */}
            <div className="lg:px-2 pt-20">
                <div className="md:px-8 min-[360px]:px-4 text-gray-500 font-normal text-3xl">Latest Movies</div>
                <div className="Movie-container text-white">
                    <div className="Movie-wrapper flex flex-wrap gap-y-3 justify-center lg:justify-start gap-x-0">
                        {latestMovie.map((movie, index) => {
                            if (index < 12)
                                return (
                                    <div className="flex min-[1440px]:w-[12.5%] lg:w-[16.6%] md:w-[25%] min-[320px]:w-[50%] px-[5px] py-8 flex-col cursor-pointer hover:scale-[1.02] duration-150">
                                        <MovieWrapper key={index} movie={movie} {...movie} selectedMovie={setSelectedMovie} />
                                    </div>
                                );
                        })}
                    </div>
                    <div className="items-center flex justify-center">
                        <div className="bg-green-500 lg:w-[30vh] min-[360px]:w-[20vh]  text-center py-3 cursor-pointer rounded-md">More Movies</div>
                    </div>
                </div>
            </div>

            {/* {selectedMovie.title ? alert(selectedMovie.title) : null} */}

            {/* LATEST TV-SERIES */}
            <div className="lg:px-2 py-20 ">
                <div className="md:px-8 min-[360px]:px-4 text-gray-500 font-normal text-3xl">Latest TV-Series</div>
                <div className="Movie-container text-white">
                    <div className="Movie-wrapper flex flex-wrap gap-y-3 justify-center lg:justify-start">
                        {tvSeries.map((movie, index) => {
                            return <SeriesWrapper key={index} movie={movie} {...movie} selectedMovie={setSelectedMovie} />;
                        })}
                        {console.log(selectedMovie)}
                        {selectedMovie.name ? alert(selectedMovie.name) : null}
                    </div>
                    <div className="items-center flex justify-center">
                        <div className="bg-green-500 lg:w-[30vh] min-[360px]:w-[20vh] text-center py-3 cursor-pointer rounded-md">More TV-Series</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
