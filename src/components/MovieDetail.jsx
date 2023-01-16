import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

    useEffect(() => {
        const getVideos = async () => {
            const { data } = await getMovies.get(`/movie/${id}`);
            setTrailer(data.videos.results.find((vid) => vid.name === 'Official Trailer' || vid.name === 'official trailer'));
            setMovie(data);
            setGenre(data.genres);
            setCountry(data.production_countries);
            setCompany(data.production_companies);
        };
        getVideos();
    }, []);
    country.map((gen) => {
        console.log(gen.name);
    });
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
                <div className="flex w-full px-12 py-12 gap-x-12">
                    <div className="min-[1440px]:w-[15%] lg:w-[20%] md:w-[25%] min-[320px]:hidden md:inline">
                        <div
                            style={{ backgroundImage: `url(${imgURL}${movie.poster_path})` }}
                            className="bg-contain bg-cover bg-center md:h-[45vh] bg-no-repeat duration-500 rounded-md"
                        ></div>
                    </div>
                    <div className="w-3/5 flex flex-col gap-y-4">
                        <div className="text-white font-bold text-3xl">{movie.title}</div>
                        <div className="text-white ">{movie.overview}</div>
                        <div className="text-white flex">
                            Country :{' '}
                            {country.map((item) => {
                                return <div>{item.name}</div>;
                            })}
                        </div>
                        <div className="text-white flex">
                            Production :{' '}
                            {company.map((item, index) => {
                                return index === company.length - 1 ? (
                                    <div className="" key={index}>
                                        {item.name}
                                    </div>
                                ) : (
                                    <div className="" key={index}>
                                        {item.name},
                                    </div>
                                );
                            })}
                        </div>
                        <div className="text-white ">Release : {movie.release_date}</div>
                        <div className="flex text-white gap-x-2 ">
                            <div className="">Genre : </div>
                            {genre.map((gen, index) => {
                                return index === genre.length - 1 ? (
                                    <div className="" key={index}>
                                        {gen.name}
                                    </div>
                                ) : (
                                    <div className="" key={index}>
                                        {gen.name},
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
