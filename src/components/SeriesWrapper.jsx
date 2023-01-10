import { Star } from 'tabler-icons-react';

export default function SeriesWrapper({ index, name, poster_path, vote_average, overview, genre_ids, first_air_date, movie, selectedMovie }) {
    const imgURL = `https://image.tmdb.org/t/p/w1280${poster_path}`;
    let year = '';
    if (first_air_date) year = first_air_date.split('-');
    if (name != null) {
        return (
            <div
                className="flex md:w-[33vh] min-[375px]:w-[25vh] min-[410px]:w-[21vh] w-[30vh] md:gap-y-2 md:px-5 px-2 py-8 flex-col cursor-pointer hover:scale-[1.02] duration-150"
                onClick={() => selectedMovie(movie)}
            >
                <div
                    style={{ backgroundImage: `url(${imgURL})` }}
                    className="bg-cover bg-center md:w-[30vh] min-[375px]:w-[23vh] w-[28vh] h-[35vh] bg-no-repeat md:h-[45vh] duration-500 rounded-lg"
                ></div>
                <div className="truncate md:w-[30vh] w-[15vh]" dangerouslySetInnerHTML={{ __html: name }}></div>
                <div className="flex flex-row justify-between min-[375px]:w-[23vh]  w-[28vh] md:w-[30vh] items-center">
                    <div className="flex justify-center items-center min-[375px]:gap-x-2 gap-x-1">
                        <div className="flex flex-row justify-center items-center gap-x-1">
                            <Star size={16} color="#30bb26" />
                            <div className="text-gray-500 text-sm" dangerouslySetInnerHTML={{ __html: vote_average }}></div>
                        </div>
                        <div className="text-gray-500">•</div>
                        <div className="text-gray-500 text-sm" dangerouslySetInnerHTML={{ __html: year[0] }}></div>
                    </div>
                    <div className="border px-2 py-1 items-center flex border-gray-500 rounded-md">
                        <div className="text-gray-500 text-xs">TV</div>
                    </div>
                </div>
            </div>
        );
    }
}
