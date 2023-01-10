import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu2, Search, BrandGithub } from 'tabler-icons-react';
export default function Navbar() {
    const [color, setColor] = useState(false);
    const changeColor = () => {
        // if (window.scrollY >= 90) {
        //     setColor(true);
        // } else {
        //     setColor(false);
        // }
        window.scrollY >= 90 ? setColor(true) : setColor(false);
    };
    window.addEventListener('scroll', changeColor);

    return (
        <nav
            className={
                color
                    ? 'Navbar duration-300 z-50 fixed bg-slate-900 px-12 py-4 text-white w-full'
                    : 'duration-300 Navbar fixed px-12 py-8 text-white w-full'
            }>
            <div className='flex md:gap-x-20 md:justify-start justify-between'>
                <div className='md:flex justify-center items-center'>
                    <Link className='text-2xl font-medium'>Movielink</Link>
                </div>
                <div className='flex lg:flex-row flex-row-reverse md:justify-between w-full'>
                    <div className='Menubar lg:hidden'>
                        <Menu2 size={32} color='white'></Menu2>
                    </div>
                    <div className='Navigasi     lg:flex text-[#ffffff8C] font-normal hidden gap-x-8 justify-center items-center'>
                        <Link to='/' className='text-[14px]'>
                            Home
                        </Link>
                        <Link to='/genre' className='text-[14px]'>
                            Genre
                        </Link>
                        <Link to='/country' className='text-[14px]'>
                            Country
                        </Link>
                        <Link to='/movies' className='text-[14px]'>
                            Movies
                        </Link>
                        <Link to='/tvseries' className='text-[14px]'>
                            TV-Series
                        </Link>
                    </div>
                    <div className='Searchbar flex items-center md:justify-between md:gap-x-8 rounded-xl md:py-2 md:px-8 md:bg-[#ffffff13]'>
                        <input
                            className='bg-transparent md:flex hidden outline-0 md:w-[40vh]'
                            placeholder='search movies'
                            type='text'
                            name=''
                            id=''
                        />
                        <Search size={24} color='white'></Search>
                    </div>
                    <button className='bg-green-700 lg:flex hidden flex-row items-center text-sm text-[#ffffffee] rounded-lg px-[4vh]'>
                        <BrandGithub size={24} color='#ffffffee'></BrandGithub>
                    </button>
                </div>
            </div>
        </nav>
    );
}
