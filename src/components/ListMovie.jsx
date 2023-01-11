import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieWrapper from './MovieWrapper';
import SeriesWrapper from './SeriesWrapper';
import tmdb from './tmdb';
import YouTube from 'react-youtube';

export default function ListMovie() {
    const [movies, setMovies] = useState([]);
    const [latestMovie, setLatestMovies] = useState([]);
    const [tvSeries, setTvSeries] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({});
    const [selectedSeries, setSelectedSeries] = useState({});

    useEffect(() => {
        const fetchMovies = async () => {
            const {
                data: { results },
            } = await tmdb.get('/movie/76600/recommendations?page=1');
            const dataTv = await tmdb.get('/tv/top_rated');
            const dataLatestMovie = await tmdb.get('/movie/now_playing');
            setLatestMovies(dataLatestMovie.data.results);
            setMovies(results);
            setTvSeries(dataTv.data.results);
        };
        fetchMovies();
    }, []);

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
        <div className="">
            {/* RECOMENDED MOVIES */}
            <div className="px-2 pt-20">
                <div className="md:px-8 min-[360px]:px-4 text-gray-500 font-normal text-3xl">Recomended</div>
                <div className="Movie-container text-white">
                    <div className="Movie-wrapper flex flex-wrap gap-y-3">
                        {movies.map((movie, index) => {
                            return <MovieWrapper key={index} movie={movie} {...movie} selectedMovie={setSelectedMovie} />;
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
                            if (index < 12) return <MovieWrapper key={index} movie={movie} {...movie} selectedMovie={setSelectedMovie} />;
                        })}
                        {selectedMovie.title ? alert(selectedMovie.title) : null};
                    </div>
                    <div className="items-center flex justify-center">
                        <div className="bg-green-500 lg:w-[30vh] min-[360px]:w-[20vh]  text-center py-3 cursor-pointer rounded-md">More Movies</div>
                    </div>
                </div>
            </div>

            {/* LATEST TV-SERIES */}
            <div className="lg:px-2 py-20 ">
                <div className="md:px-8 min-[360px]:px-4 text-gray-500 font-normal text-3xl">Top TV-Series</div>
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
