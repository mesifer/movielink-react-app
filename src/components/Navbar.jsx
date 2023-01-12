import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu2, Search, BrandGithub } from 'tabler-icons-react';
export default function Navbar() {
    const [color, setColor] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const changeColor = () => {
        window.scrollY >= 90 ? setColor(true) : setColor(false);
    };

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    window.addEventListener('scroll', changeColor);

    return (
        <nav
            className={
                color
                    ? 'Navbar duration-300 z-50 fixed bg-slate-900 lg:px-12  py-4 text-white w-full'
                    : 'duration-300 Navbar fixed lg:px-12 z-50 py-8 text-white w-full'
            }
        >
            <div className="flex md:gap-x-20 justify-between lg:px-12 min-[320px]:px-4">
                <div className="md:flex justify-center items-center">
                    <Link className="text-2xl font-medium">Movielink</Link>
                </div>
                <div className="flex lg:flex-row flex-row-reverse justify-between items-center w-full ">
                    <div className="Menubar lg:hidden">
                        <Menu2 onClick={handleToggle} size={32} color="white"></Menu2>
                    </div>
                    <div
                        className={
                            isActive
                                ? 'Navigasi text-[#ffffff8C] font-normal lg:static min-[320px]:flex-col min-[320px]:w-[100%] lg:w-[40%] min-[320px]:left-0 min-[320px]:px-4 lg:flex  min-[320px]:absolute min-[320px]:top-[120%] gap-x-8 md:pl-[60%] lg:pl-0'
                                : 'Navigasi text-[#ffffff8C] font-normal lg:static min-[320px]:flex-col min-[320px]:w-[100%] lg:w-[40%] min-[320px]:left-0 min-[320px]:px-4 lg:flex hidden min-[320px]:absolute min-[320px]:top-[120%] gap-x-8 md:pl-[60%] lg:pl-0'
                        }
                    >
                        <div className="min-[320px]:bg-slate-900/95 min-[320px]:flex min-[320px]:flex-col lg:flex-row lg:bg-transparent min-[320px]:py-4 min-[320px]:px-6   min-[320px]:rounded-xl gap-x-12">
                            <Link
                                to="/"
                                className="hover:text-white/90 min-[320px]:text-[16px] min-[320px]:border-b-[1px] min-[320px]:border-white/5 min-[320px]:py-4 lg:text-[14px]"
                            >
                                Home
                            </Link>
                            <Link
                                to="/genre"
                                onMouseEnter={() => alert('test')}
                                className="hover:text-white/90 min-[320px]:text-[16px] min-[320px]:border-b-[1px] min-[320px]:border-white/5 min-[320px]:py-4 lg:text-[14px]"
                            >
                                Genre
                            </Link>
                            <Link
                                to="/movies"
                                className="hover:text-white/90 min-[320px]:text-[16px] min-[320px]:border-b-[1px] min-[320px]:border-white/5 min-[320px]:py-4 lg:text-[14px]"
                            >
                                Movies
                            </Link>
                            <Link
                                to="/tvseries"
                                className="hover:text-white/90 min-[320px]:text-[16px] min-[320px]:border-b-[1px] min-[320px]:border-white/5 min-[320px]:py-4 lg:text-[14px]"
                            >
                                TV-Series
                            </Link>
                            <div className="bg-green-700 mt-6 flex flex-row justify-center items-center text-sm text-[#ffffffee] rounded-lg px-[4vh] py-[1vh]">
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
                        <input
                            className="bg-transparent md:flex hidden outline-0 md:w-[40vh]"
                            placeholder="search movies"
                            type="text"
                            name=""
                            id=""
                        />
                        <Search size={24} color="white"></Search>
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
