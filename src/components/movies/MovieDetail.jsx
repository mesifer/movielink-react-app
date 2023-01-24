import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import getTrailer from '../tmdb';
import VideoIframe from '../iFrame';
import Navbar from '../Navbar';
import ReviewMovies from './ReviewMovies';
import Footer from '../Footer';
import PuffLoader from 'react-spinners/PuffLoader';

const imgURL = 'https://image.tmdb.org/t/p/w1280';

export default function MovieDetail() {
    const { id } = useParams();
    const { pathname } = useLocation();

    const [trailer, setTrailer] = useState([]);
    const [movie, setMovie] = useState([]);
    const [genre, setGenre] = useState([]);
    const [credit, setCredit] = useState([]);
    const [cast, setCast] = useState([]);
    const [country, setCountry] = useState([]);
    const [company, setCompany] = useState([]);
    const [review, setReview] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        const getVideos = async () => {
            try {
                const { data } = await getTrailer.get(`/movie/${id}`);
                const reviews = await getTrailer.get(`/movie/${id}/reviews`);
                const credits = await getTrailer.get(`/movie/${id}/credits`);
                setReview(reviews.data);
                setTrailer(data.videos.results.find((vid) => vid.name.includes('Trailer') || vid.name.includes('trailer')));
                setMovie(data);
                setGenre(data.genres);
                setCountry(data.production_countries);
                setCompany(data.production_companies);
                setCast(credits.data.cast);
                setCredit(credit.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        getVideos();
    }, [pathname]);

    return (
        <div className="movie-detail bg-slate-900">
            <Navbar />
            {!loading ? (
                <div className="">
                    <div className="">
                        <div className=" flex justify-center h-[100vh]">
                            <div
                                style={{ backgroundImage: `url(${imgURL}${movie.backdrop_path})` }}
                                className="md:bg-cover bg-center w-full bg-no-repeat h-full duration-500 "
                            >
                                <div className="layer bg-[#0f172a98] w-full h-full flex justify-center items-center lg:pt-20">
                                    <div className="w-[95%]">
                                        {trailer ? (
                                            <VideoIframe videoId={trailer.key} videoTitle={trailer.name} />
                                        ) : (
                                            <div className="w-full lg:h-[80vh] md:h-[60vh] h-[50vh] bg-black/50 text-white/50 text-center flex justify-center items-center text-3xl">
                                                Video Not Found
                                            </div>
                                        )}
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
                                <div className="text-white/50 font-light text-justify">{movie.overview}</div>
                                <div className="text-white/50 font-light flex flex-col gap-y-2">
                                    <div className=" flex">
                                        <div className="flex justify-between min-[1400px]:w-[15%]  md:w-[20%] w-[30%] ">
                                            <div className="">Country</div>
                                            <div className="">:</div>
                                        </div>
                                        &ensp;
                                        <div className="w-2/3">
                                            {country.map((item, index) => {
                                                return index === country.length - 1 ? (
                                                    <span key={index} className="text-white/80 hover:text-green-400 cursor-pointer">
                                                        {item.name}
                                                    </span>
                                                ) : (
                                                    <span key={index} className="text-white/80 hover:text-green-400 cursor-pointer">
                                                        {item.name},&ensp;
                                                    </span>
                                                );
                                            })}
                                        </div>
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
                                                    <span key={index} className="text-white/80 hover:text-green-400 cursor-pointer">
                                                        {item.name}
                                                    </span>
                                                ) : (
                                                    <span key={index} className="text-white/80 hover:text-green-400 cursor-pointer">
                                                        {item.name},&ensp;
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex justify-between min-[1400px]:w-[15%]  md:w-[20%] w-[30%] ">
                                            <div className="">Cast</div>
                                            <div className="">:</div>
                                        </div>
                                        &ensp;
                                        <div className="w-2/3">
                                            {cast.map((item, index) => {
                                                return index > 4 ? null : index === 4 ? (
                                                    <span key={index} className="text-white/80 hover:text-green-400 cursor-pointer">
                                                        {item.name}
                                                    </span>
                                                ) : (
                                                    <span key={index} className="text-white/80 hover:text-green-400 cursor-pointer">
                                                        {item.name},&ensp;
                                                    </span>
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
                                                    <span key={index} className="text-white/80 hover:text-green-400 cursor-pointer">
                                                        {gen.name}
                                                    </span>
                                                ) : (
                                                    <span key={index} className="text-white/80 hover:text-green-400 cursor-pointer">
                                                        {gen.name},&ensp;
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ReviewMovies {...review} />
                    <Footer />
                </div>
            ) : (
                <div className="place-content-center text-white grid w-full h-screen">
                    <PuffLoader size={150} color={'#15803D'} />
                </div>
            )}
        </div>
    );
}
