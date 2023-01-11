import { ChevronLeft, ChevronRight, Minus, Star } from 'tabler-icons-react';
import React, { useState, useEffect } from 'react';
import '../../public/css/slider.css';
import tmdb from './tmdb';
const imgPopular = [];
const imgURL = 'https://image.tmdb.org/t/p/w1280';

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slide, setSlide] = useState([]);
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        const fetchMovies = async () => {
            const dataPopular = await tmdb.get('movie/popular').then();
            popular.map((el) => {
                const img = `${imgURL}${el.backdrop_path}`;
                imgPopular.push(img);
            });
            setSlide(imgPopular);
            setPopular(dataPopular.data.results);
        };
        fetchMovies();
    });

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? 10 - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
        const isLastSlide = currentIndex === 10 - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="w-full h-screen">
            <div style={{ backgroundImage: `url(${slide[currentIndex]})` }} className="md:bg-cover bg-center w-full bg-no-repeat h-full duration-500">
                <div className="layer bg-[#0f172a98]  w-full h-full"></div>
                <div className="md:px-20 px-12 md:justify-start justify-center w-full flex flex-col gap-y-2 absolute md:top-[32%] min-[1440px]:top-[35%] top-[15%] bottom-0">
                    {popular.map((movie, movieIndex) => {
                        if (movieIndex === currentIndex && currentIndex < 10) {
                            return (
                                <div className="">
                                    <div className="md:px-4 lg:px-20 px-1 md:justify-start justify-center md:items-start items-center flex flex-col gap-y-4">
                                        <div className="min-[1440px]:w-3/5 text-white md:text-start text-center md:text-[36px] text-[28px] font-bold  ">
                                            {movie.title}
                                        </div>
                                        <div className="flex md:gap-x-6 gap-x-2 md:gap-y-0 gap-y-1 md:flex-row flex-col">
                                            <div className="bg-[#30bb26] md:mx-0 mx-4 md:p-0 px-3 py-2 text-center rounded-xl font-semibold md:px-5 md:mb-0 mb-4">
                                                HD
                                            </div>
                                            <div className="flex gap-x-2 md:justify-start items-center justify-center flex-row text-white">
                                                <Star size={20} color="#30bb26" />
                                                <div className="">{movie.vote_average}</div>
                                            </div>
                                            <div className="flex gap-x-3 md:justify-start justify-center md:text-[16px] text-[14px] text-white">
                                                <div className="">Drama</div>
                                                <div className="">Action</div>
                                                <div className="">Crime</div>
                                            </div>
                                        </div>
                                        <div className="md:flex hidden md:w-5/5 min-[1440px]:w-3/5 min-[320px]:w-full text-justify text-white">
                                            {movie.overview}
                                        </div>
                                        <div className="border border-[#30bb26] text-[#30bb26] cursor-pointer w-[20vh] text-center py-2 rounded-xl">
                                            More Detail
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
                <div className="flex  absolute top-[50%] justify-between w-full md:px-4 px-0">
                    {/* Left Arrow */}
                    <div className="cursor-pointer">
                        <ChevronLeft onClick={prevSlide} size={40} color="#ffffff" />
                    </div>
                    {/* Right Arrow */}
                    <div className="cursor-pointer">
                        <ChevronRight onClick={nextSlide} size={40} color="#ffffff" />
                    </div>
                </div>
                <div className="absolute hidden top-[90%] w-full lg:flex flex-col gap-y-[50vh]">
                    <div className="flex justify-center ">
                        {slide.map((slide, slideIndex) => {
                            if (slideIndex < 10) {
                                return (
                                    <div className="">
                                        <div className="flex justify-center w-[10vh]">
                                            <div
                                                key={slideIndex}
                                                className={
                                                    slideIndex === currentIndex
                                                        ? 'active bg-green-300 indicator rounded-lg cursor-pointer w-4/5 h-1'
                                                        : 'indicator rounded-lg cursor-pointer w-4/5 h-1'
                                                }
                                            ></div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
