import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import getMovies from './getMovies';
import VideoIframe from './iFrame';
import Navbar from './Navbar';
const imgURL = 'https://image.tmdb.org/t/p/w1280';

export default function MovieDetail() {
    const { id } = useParams();
    const [trailer, setTrailer] = useState([]);
    const [movie, setMovie] = useState([]);
    const [genre, setGenre] = useState([]);
    const [country, setCountry] = useState([]);
    const [company, setCompany] = useState([]);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        const getVideos = async () => {
            const { data } = await getMovies.get(`/movie/${id}`);
            setTrailer(data.videos.results.find((vid) => vid.name.includes('Trailer') || vid.name.includes('trailer')));
            setMovie(data);
            setGenre(data.genres);
            setCountry(data.production_countries);
            setCompany(data.production_companies);
        };
        getVideos();
    }, [pathname]);

    return (
        <div className="movie-detail bg-slate-900">
            <Navbar />
            <div className="">
                <div className=" flex justify-center h-[100vh]">
                    <div
                        style={{ backgroundImage: `url(${imgURL}${movie.backdrop_path})` }}
                        className="md:bg-cover bg-center w-full bg-no-repeat h-full duration-500 "
                    >
                        <div className="layer bg-[#0f172a98] w-full h-full flex justify-center items-center lg:pt-20">
                            <div className="w-[95%]">
                                <VideoIframe videoId={trailer.key} videoTitle={trailer.name} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full lg:px-32 min-[425px]:px-12 md:px-12 pl-4 pr-2 py-12 gap-x-12    items-center justify-center">
                    <div className="min-[1400px]:w-[20%] lg:w-[50%] md:w-[40%] min-[320px]:hidden md:inline">
                        <div
                            style={{ backgroundImage: `url(${imgURL}${movie.poster_path})` }}
                            className="bg-contain bg-cover bg-center min-[1400px]:h-[50vh] lg:h-[60vh] md:h-[45vh] bg-no-repeat duration-500 rounded-md"
                        ></div>
                    </div>
                    <div className="min-[1400px]:w-[50%] flex flex-col gap-y-4 lg:text-base w-full text-[16px]">
                        <div className="text-white font-bold text-3xl">{movie.title}</div>
                        <div className="text-white/50 font-light">{movie.overview}</div>
                        <div className="text-white/50 font-light flex flex-col gap-y-2">
                            <div className=" flex">
                                <div className="flex justify-between min-[1400px]:w-[15%]  md:w-[20%] w-[30%] ">
                                    <div className="">Country</div>
                                    <div className="">:</div>
                                </div>
                                &ensp;
                                {country.map((item) => {
                                    return <div className="text-white/80 hover:text-green-400 cursor-pointer">{item.name}</div>;
                                })}
                            </div>
                            <div className="flex">
                                <div className="flex justify-between min-[1400px]:w-[15%]  md:w-[20%] w-[30%] ">
                                    <div className="">Production</div>
                                    <div className="">:</div>
                                </div>
                                &ensp;
                                <div className="w-2/3">
                                    {company.map((item, index) => {
                                        return index === company.length - 1 ? (
                                            <span className="text-white/80 hover:text-green-400 cursor-pointer">{item.name}</span>
                                        ) : (
                                            <span className="text-white/80 hover:text-green-400 cursor-pointer">{item.name}, </span>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className=" flex ">
                                <div className="flex justify-between min-[1400px]:w-[15%]  md:w-[20%] w-[30%] ">
                                    <div className="">Release</div>
                                    <div className="">:</div>
                                </div>
                                &ensp;
                                {movie.release_date}
                            </div>
                            <div className="flex  gap-x-2 ">
                                <div className="flex justify-between min-[1400px]:w-[15%]  md:w-[20%] w-[30%]">
                                    <div className="">Genre</div>
                                    <div className="">:</div>
                                </div>
                                <div className="w-2/3">
                                    {genre.map((gen, index) => {
                                        return index === genre.length - 1 ? (
                                            <span className="text-white/80 hover:text-green-400 cursor-pointer">{gen.name}</span>
                                        ) : (
                                            <span className="text-white/80 hover:text-green-400 cursor-pointer">{gen.name}, </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
