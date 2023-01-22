import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MovieWrapper from './MovieWrapper';
import getRecommendations from '../tmdb';
import { useLocation, useParams } from 'react-router-dom';
export default function ReviewMovies({ page, results, total_results, created_at }) {
    const { id } = useParams();
    const { pathname } = useLocation();
    console.log('ID: ', id);
    const [img, setImg] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({});
    const [toggle, setToggle] = useState({});
    const toggleReadMore = (index) => {
        setToggle({
            ...toggle,
            [index]: !toggle[index],
        });
    };
    useEffect(() => {
        const fetchData = async () => {
            const recom = await getRecommendations.get(`/movie/${id}/recommendations`);
            setRecommendations(recom.data.results);
        };
        if (results != undefined) {
            let arr = [];
            results.forEach((element) => {
                arr.push(element.author_details.avatar_path);
                setImg(arr);
            });
        }
        fetchData();
    }, [pathname]);

    return results != undefined ? (
        <div className="lg:px-12 flex lg:flex-row flex-col lg:gap-y-0 gap-y-8 gap-x-24  py-12">
            <div className="min-[1400px]:w-[50%] lg:w-[80%] lg:px-0 px-4">
                <div className="text-gray-500 text-3xl">Reviews {`(${total_results})`}</div>
                {total_results != 0 ? (
                    <div className="text-white flex flex-col gap-y-12 py-8 ">
                        {img.map((el, index) => {
                            return el ? (
                                el.includes('gravatar') ? (
                                    <div className="flex md:flex-row flex-col gap-x-4">
                                        <div className="md:w-[12%] md:gap-x-0 gap-x-4 md:gap-y-0  w-[100%] flex">
                                            <div
                                                key={index}
                                                className="w-[20%] md:w-[100%]  md:h-[10vh] h-[9vh] bg-cover rounded-md bg-contain bg-center"
                                                style={{ backgroundImage: `url(${el.substring(1)})` }}
                                            ></div>
                                            <div className="md:hidden text-xl mt-[-5px] font-bold text-green-500">{results[index].author}</div>
                                        </div>
                                        <div className="w-[100%] flex flex-col md:pt-0 pt-4">
                                            <div className="text-xl md:inline hidden mt-[-5px] font-bold text-green-500">{results[index].author}</div>
                                            <div className="">
                                                <p className="font-light text-md md:text-md text-justify text-white/80">
                                                    {!toggle[index] ? results[index].content.slice(0, 200) : results[index].content}
                                                    <span onClick={() => toggleReadMore(index)} className="read-or-hide cursor-pointer text-white/50">
                                                        {!toggle[index] ? (results[index].content.length > 200 ? '...read more' : '') : ' show less'}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div key={index} className="flex md:flex-row flex-col gap-x-4">
                                        <div className="md:w-[12%]  md:gap-x-0 gap-x-4 md:gap-y-0  w-[100%] flex">
                                            <div
                                                className="w-[20%] md:w-[100%] md:h-[10vh] h-[9vh] bg-cover rounded-md bg-contain bg-center"
                                                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${el})` }}
                                            ></div>
                                            <div className="md:hidden text-xl mt-[-5px] font-bold text-green-500">{results[index].author}</div>
                                        </div>
                                        <div className="w-[100%] flex flex-col md:pt-0 pt-4">
                                            <div className="text-xl md:inline hidden mt-[-5px] font-bold text-green-500">{results[index].author}</div>
                                            <div className="">
                                                <p className="font-light text-md md:text-md text-justify text-white/80">
                                                    {!toggle[index] ? results[index].content.slice(0, 200) : results[index].content}
                                                    <span onClick={() => toggleReadMore(index)} className="read-or-hide cursor-pointer text-white/50">
                                                        {!toggle[index] ? (results[index].content.length > 200 ? '...read more' : '') : ' show less'}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ) : null;
                        })}
                    </div>
                ) : (
                    <div className="text-white/50">No Review</div>
                )}
            </div>
            <div className="lg:flex lg:flex-col min-[1400px]:w-[50%] px-4 lg:w-[40%]">
                <div className=" text-gray-500 text-3xl  ">Related Movie</div>
                <div className="flex flex-wrap">
                    {recommendations.length != 0 ? (
                        recommendations.map((movie, index) => {
                            return index < 12 ? (
                                <div className="flex min-[1440px]:w-[33%] text-white lg:w-[100%] md:w-[25%] min-[320px]:w-[50%] px-[5px] py-8 flex-col cursor-pointer hover:scale-[1.02] duration-150">
                                    <MovieWrapper key={index} movie={movie} {...movie} selectedMovie={setSelectedMovie} />
                                </div>
                            ) : null;
                        })
                    ) : (
                        <div className="text-white/50">coming soon</div>
                    )}
                </div>
            </div>
        </div>
    ) : null;
}
