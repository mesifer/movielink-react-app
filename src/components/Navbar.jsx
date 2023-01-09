import { Link } from 'react-router-dom';
import { Menu2, Search, BrandGithub } from 'tabler-icons-react';
export default function Navbar() {
    return (
        <nav className='Navbar fixed px-12 py-8 text-white w-full'>
            <div className='flex md:gap-x-20 md:justify-start justify-between'>
                <div className='md:flex justify-center items-center'>
                    <Link className='text-2xl font-medium'>Movielink</Link>
                </div>
                <div className='flex md:flex-row flex-row-reverse md:justify-between w-full'>
                    <div className='Menubar md:hidden'>
                        <Menu2 size={32} color='white'></Menu2>
                    </div>
                    <div className='Navigasi     md:flex text-[#ffffff8C] font-normal hidden gap-x-8 justify-center items-center'>
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
                    <div className='Searchbar flex items-center md:justify-between md:gap-x-32 rounded-xl md:py-2 md:px-8 md:bg-[#ffffff13]'>
                        <div className='text-sm text-slate-400 md:flex hidden'>Search</div>
                        <Search size={24} color='white'></Search>
                    </div>
                    <button className='bg-green-800 md:flex hidden flex-row items-center text-sm text-[#ffffff8C] rounded-lg px-[4vh]'>
                        <BrandGithub size={24} color='#ffffff8C'></BrandGithub>
                        Github
                    </button>
                </div>
            </div>
        </nav>
    );
}
