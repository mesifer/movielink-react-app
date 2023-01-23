import { useNavigate } from 'react-router-dom';
import { Star } from 'tabler-icons-react';

export default function SeriesWrapper({ movie, name, poster_path, vote_average, overview, genre_ids, first_air_date, media_type, selectedMovie }) {
    let navigate = useNavigate();
    const routeChange = (id) => {
        let path = `/tv/${id}`;
        navigate(path);
    };

    const imgURL = `https://image.tmdb.org/t/p/w500${poster_path}`;
    let year = '';
    if (first_air_date) year = first_air_date.split('-');
    if (name != null) {
        return (
            <div
                onClick={() => {
                    selectedMovie(movie);
                    routeChange(movie.id);
                }}
            >
                <div
                    style={{ backgroundImage: `url(${imgURL})` }}
                    className="bg-contain bg-cover bg-center min-[320px]:bg-cover min-[1440px]:h-[37vh] lg:h-[50vh] md:h-[50vh] min-[425px]:h-[45vh] min-[320px]:h-[35vh] bg-no-repeat duration-500 rounded-md"
                ></div>
                <div className="truncate">{name}</div>
                <div className="flex flex-row justify-between items-center md:text-[16px] min-[320px]:text-[12px]">
                    <div className="flex justify-center items-center gap-x-1">
                        <div className="flex flex-row justify-center items-center gap-x-1 ">
                            <Star size={16} color="#30bb26" />
                            <div className="text-gray-500" dangerouslySetInnerHTML={{ __html: vote_average }}></div>
                        </div>
                        <div className="text-gray-500">•</div>
                        <div className="text-gray-500">{year[0]}</div>
                    </div>
                    <div className="border min-[320px]:py-[4px] px-2 py-1 items-center flex border-gray-500 rounded-md">
                        <div className="text-gray-500 text-xs">TV</div>
                    </div>
                </div>
            </div>
        );
    }
}
