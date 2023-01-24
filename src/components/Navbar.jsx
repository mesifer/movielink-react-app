import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu2, Search, BrandGithub } from 'tabler-icons-react';
import '../../public/css/slider.css';
import DatalistInput, { useComboboxControls } from 'react-datalist-input';
import { useEffect } from 'react';
import tmdb from './tmdb';
import axios from 'axios';
const imgURL = `https://image.tmdb.org/t/p/w500`;

export default function Navbar() {
    let navigate = useNavigate();

    const [color, setColor] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
    const [isData, setIsData] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');

    const changeColor = () => {
        window.scrollY >= 50 ? setColor(true) : setColor(false);
    };

    const handleToggle = () => {
        setIsMenu(!isMenu);
    };
    const searchToggle = () => {
        setIsSearch(!isSearch);
    };
    const renderData = (event) => {
        event.target.value ? setIsData(true) : setIsData(false);
        let txt = event.target.value;
        setQuery(txt);
    };
    const routeChange = (id, media) => {
        let path = `/${media}/${id}`;
        navigate(path);
        setIsSearch(false);
        setIsData(false);
    };
    const fetchData = axios.create({
        baseURL: 'https://api.themoviedb.org/3',
        headers: {
            Accept: 'application/json',
        },
        params: {
            api_key: '1887f10c3d2cd8bb12897cba9c071f32',
            language: 'en-ID',
            append_to_response: 'videos',
            query: query,
        },
    });

    useEffect(() => {
        setIsLoading(true);
        const getData = async () => {
            try {
                const { data } = await fetchData.get(`/search/multi`);
                setData(data.results);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        };
        if (query) getData();
        console.log(data);
    }, [query]);

    window.addEventListener('scroll', changeColor);
    return (
        <nav
            className={
                color
                    ? 'Navbar duration-300 z-50 fixed bg-slate-900 lg:px-4 px-4 lg:py-2 min-[320px]:py-6 text-white w-full'
                    : 'duration-300 Navbar fixed lg:px-4 px-4 z-50 py-8 text-white w-full'
            }
        >
            <div className="flex md:gap-x-24 min-[1440px]:gap-x-32 lg:gap-x-12  justify-between lg:px-12 min-[320px]:px-4">
                <div className="md:flex justify-center items-center">
                    <Link className="text-2xl font-medium">Movielink</Link>
                </div>
                <div className="flex lg:flex-row flex-row-reverse justify-between items-center w-full ">
                    <div className="Menubar lg:hidden">
                        <Menu2 onClick={handleToggle} size={32} color="white"></Menu2>
                    </div>
                    <div className="Navigasi text-[#ffffff8C] font-normal lg:static min-[320px]:flex-col min-[320px]:w-[100%] lg:w-[40%] min-[320px]:left-0 min-[320px]:px-4 lg:flex  min-[320px]:absolute min-[320px]:top-[120%] md:pl-[60%] lg:pl-0">
                        <div
                            className={
                                isSearch
                                    ? 'mb-4 flex justify-between flex-row md:hidden  bg-white/100 w-full rounded-md'
                                    : 'mb-4 hidden justify-between flex-row  bg-white/100 w-full rounded-md'
                            }
                        >
                            <div className="">
                                <input
                                    className="w-5/6 px-8 py-2 bg-transparent placeholder:text-slate-800 text-slate-800 md:flex  outline-0 md:w-[40vh]"
                                    placeholder="search movies"
                                    type="text"
                                    name=""
                                    id=""
                                    onChange={renderData}
                                    value={query}
                                />
                            </div>

                            <div className="w-1/6 bg-green-700 items-center flex justify-center rounded-r-md">
                                <Search size={24} color="white"></Search>
                            </div>
                        </div>
                        <div
                            className={
                                isMenu
                                    ? 'min-[320px]:bg-slate-900/95 min-[320px]:flex min-[320px]:flex-col lg:flex-row lg:bg-transparent min-[320px]:py-4 min-[320px]:px-6 min-[320px]:rounded-xl gap-x-12'
                                    : 'hidden lg:flex lg:flex-row min-[1400px]:gap-x-12 lg:gap-x-8'
                            }
                        >
                            <Link
                                to="/"
                                className="hover:text-white/90 min-[320px]:text-[16px] min-[320px]:border-b-[1px] min-[320px]:border-white/5 min-[320px]:py-4 lg:text-[14px] lg:border-none"
                            >
                                Home
                            </Link>
                            <Link
                                to="/genre"
                                onMouseEnter={() => alert('test')}
                                className="hover:text-white/90 min-[320px]:text-[16px] min-[320px]:border-b-[1px] min-[320px]:border-white/5 min-[320px]:py-4 lg:text-[14px] lg:border-none"
                            >
                                Genre
                            </Link>
                            <Link
                                to="/movies"
                                className="hover:text-white/90 min-[320px]:text-[16px] min-[320px]:border-b-[1px] min-[320px]:border-white/5 min-[320px]:py-4 lg:text-[14px] lg:border-none"
                            >
                                Movies
                            </Link>
                            <Link
                                to="/tvseries"
                                className="hover:text-white/90 min-[320px]:text-[16px] min-[320px]:border-b-[1px] min-[320px]:border-white/5 min-[320px]:py-4 lg:text-[14px] lg:border-none"
                            >
                                TV-Series
                            </Link>
                            <div className="bg-green-700 lg:hidden mt-6 flex flex-row justify-center items-center text-sm text-[#ffffffee] rounded-lg px-[4vh] py-[1vh]">
                                <a className="" href="https://github.com/rosfandy/movielink-react-app">
                                    <button className="flex gap-x-1 font-semibold items-center">
                                        <BrandGithub size={24} color="#ffffffee"></BrandGithub>
                                        Rosfandy
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="Searchbar flex items-center md:justify-between md:gap-x-2 rounded-xl md:py-2 md:px-8 md:bg-[#ffffff13] min-[320px]:pl-[60%]">
                        <div className="search">
                            <input
                                className="bg-transparent md:flex hidden outline-0 md:w-[40vh]"
                                list="data"
                                placeholder="search movies"
                                type="text"
                                onChange={renderData}
                                value={query}
                            />
                            {isData ? (
                                <div className="bg-black/90 min-[1400px]:w-[20.5%] lg:w-[35%] md:w-[38%] md:mt-[1.5vh] md:flex md:left-auto mt-[18vh] left-1 w-[98%] flex-col  absolute rounded-md ">
                                    {!loading ? (
                                        data.length != 0 ? (
                                            <div className="">
                                                <div className="overflow-y-auto md:max-h-[70vh] max-h-[50vh] ">
                                                    {data.map((movie, index) => {
                                                        return movie.media_type != 'person' ? (
                                                            <div
                                                                key={index}
                                                                className="flex rounded-md hover:bg-white/20 py-4 px-4"
                                                                onClick={() => {
                                                                    routeChange(movie.id, movie.media_type);
                                                                }}
                                                            >
                                                                <div
                                                                    className="w-[20%] h-[12vh] bg-cover bg-center bg-contain bg-no-repeat"
                                                                    style={{ backgroundImage: `url(${imgURL}/${movie.poster_path})` }}
                                                                ></div>
                                                                <div className="p-4 w-[80%]   cursor-pointer">
                                                                    <option className="truncate" value="">
                                                                        {movie.title ? movie.title : movie.name}
                                                                    </option>
                                                                    <span className="text-white/50 uppercase text-xs">{movie.media_type}</span>
                                                                </div>
                                                            </div>
                                                        ) : index === data.length - 1 ? (
                                                            <div className="p-4 text-white/50">Data not found</div>
                                                        ) : null;
                                                    })}
                                                </div>
                                                <div className="p-4 lg:hidden">
                                                    <button
                                                        onClick={() => {
                                                            setIsData(false);
                                                            setIsSearch(false);
                                                            setQuery('');
                                                        }}
                                                        className="bg-green-700 text-center w-full py-1 rounded-md"
                                                    >
                                                        close
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="p-4 text-white/50">Data not found</div>
                                        )
                                    ) : (
                                        <div className="">
                                            <div className="px-4 rounded-t-md text-white/50 py-4">loading...</div>
                                        </div>
                                    )}
                                </div>
                            ) : null}
                        </div>
                        <Search size={24} onClick={searchToggle} color="white"></Search>
                    </div>
                    <a
                        className="bg-green-700 lg:flex hidden flex-row items-center text-sm text-[#ffffffee] rounded-lg px-[4vh] py-[1vh]"
                        href="https://github.com/mesifer/movielink-react-app"
                    >
                        <button className="">
                            <BrandGithub size={24} color="#ffffffee"></BrandGithub>
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
}
