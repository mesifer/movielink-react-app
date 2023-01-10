import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieWrapper from './MovieWrapper';
import SeriesWrapper from './SeriesWrapper';
import tmdb from './tmdb';
export default function ListMovie() {
    const [movies, setMovies] = useState([]);
    const [tvSeries, setTvSeries] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await tmdb.get('/movie/76600/recommendations');
            const dataTv = await tmdb.get('/tv/top_rated');
            setMovies(data.results);
            setTvSeries(dataTv.data.results);
        };
        fetchMovies();
    }, []);

    return (
        <div className=''>
            {/* RECOMENDED MOVIES */}
            <div className='md:px-2 md:pt-20'>
                <div className='md:px-8 text-gray-500 font-normal text-3xl'>Recomended</div>
                <div className='Movie-container text-white'>
                    <div className='Movie-wrapper flex flex-wrap gap-y-3 justify-center lg:justify-start '>
                        {movies.map((movie, index) => {
                            console.log(index, movie);
                            return <MovieWrapper key={index} {...movie} />;
                        })}
                    </div>
                </div>
            </div>

            {/* LATEST MOVIES */}
            <div className='lg:px-2 md:pt-20'>
                <div className='md:px-8 text-gray-500 font-normal text-3xl'>Latest Movies</div>
                <div className='Movie-container text-white'>
                    <div className='Movie-wrapper flex flex-wrap gap-y-3 justify-center lg:justify-start gap-x-0'>
                        {movies.map((movie, index) => {
                            console.log(index, movie);
                            if (index < 7) return <MovieWrapper key={index} {...movie} />;
                        })}
                    </div>
                    <div className='items-center flex justify-center'>
                        <div className='bg-green-500 lg:w-[30vh] text-center py-3 cursor-pointer rounded-md'>More Movies</div>
                    </div>
                </div>
            </div>

            {/* LATEST TV-SERIES */}
            <div className='lg:px-2 md:py-20'>
                <div className='md:px-8 text-gray-500 font-normal text-3xl'>Top TV-Series</div>
                <div className='Movie-container text-white'>
                    <div className='Movie-wrapper flex flex-wrap gap-y-3 justify-center lg:justify-start'>
                        {tvSeries.map((movie, index) => {
                            console.log(index, movie);
                            return <SeriesWrapper key={index} {...movie} />;
                        })}
                    </div>
                    <div className='items-center flex justify-center'>
                        <div className='bg-green-500 lg:w-[30vh] text-center py-3 cursor-pointer rounded-md'>More TV-Series</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
