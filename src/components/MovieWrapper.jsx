import { Star } from 'tabler-icons-react';

export default function MovieWrapper({ movie, title, poster_path, vote_average, overview, genre_ids, release_date, media_type, selectedMovie }) {
    const imgURL = `https://image.tmdb.org/t/p/w1280${poster_path}`;
    let year = '';
    if (release_date) year = release_date.split('-');
    if (title != null) {
        return (
            <div
                className="flex min-[1440px]:w-[12.5%] md:w-[25%] min-[320px]:w-[50%] px-[5px] py-8 flex-col cursor-pointer hover:scale-[1.02] duration-150"
                onClick={() => selectedMovie(movie)}
            >
                <div
                    style={{ backgroundImage: `url(${imgURL})` }}
                    className="lg:bg-contain min-[320px]:bg-cover min-[1440px]:h-[37vh] lg:h-[58vh] md:h-[40vh] min-[425px]:h-[45vh] min-[320px]:h-[35vh] bg-no-repeat duration-500 rounded-md"
                ></div>
                <div className="truncate">{title}</div>
                <div className="flex flex-row justify-between items-center md:text-[16px] min-[320px]:text-[10px]">
                    <div className="flex justify-center items-center gap-x-1">
                        <div className="flex flex-row justify-center items-center gap-x-1 ">
                            <Star size={16} color="#30bb26" />
                            <div className="text-gray-500" dangerouslySetInnerHTML={{ __html: vote_average }}></div>
                        </div>
                        <div className="text-gray-500">•</div>
                        <div className="text-gray-500">{year[0]}</div>
                    </div>
                    <div className="border min-[320px]:py-[4px] px-2 py-1 items-center flex border-gray-500 rounded-md">
                        <div className="text-gray-500 text-xs">Movie</div>
                    </div>
                </div>
            </div>
        );
    }
}
