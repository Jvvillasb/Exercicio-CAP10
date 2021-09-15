import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Genre, MoviesResponse } from 'core/types/Movie';
import { makePrivateRequest } from 'core/utils/request';
import MovieCardLoader from './Components/Loaders/MovieCardLoader';
import MovieCard from './Components/MovieCard'
import MovieFilter from './Components/MovieFilter';
import Pagination from './Components/MoviePagination';

import './styles.scss'

const Movies = () => {
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [genre, setGenre] = useState<Genre>();
    const [activePage, setActivePage] = useState(0);
    const [isLoading, setIsloading] = useState(false);
    useEffect(() => {
        const params = {
            linesPerPage: 12,
            genreId: genre?.id,
            page: activePage
        }
        setIsloading(true);
        makePrivateRequest({ url: '/movies', params })
            .then(response => setMoviesResponse(response.data))
            .finally(() => {
                setIsloading(false);
            })
    }, [genre, activePage])

    const handleChangeGenre = (genre: Genre) => {
        console.log(genre)
        setActivePage(0);
        setGenre(genre);

    }

    return (
        <div className="movie-main">
           
            <div className="movie-filters">
                <MovieFilter
                    handleChangeGenre={handleChangeGenre}
                />
            </div>

            <div className="movie-list">
                {
                    isLoading ? (<MovieCardLoader />) : (
                        moviesResponse?.content.map(movie => (
                            <Link
                                to={`/movies/${movie.id}`}
                                key={movie.id}
                                className="movie-list-iten"
                            >
                                <MovieCard movie={movie} />
                            </Link>
                        ))
                    )
                }
            </div>

            {moviesResponse &&
                <Pagination
                    totalPages={moviesResponse?.totalPages}
                    onChange={page => setActivePage(page)}
                />
            }


        </div>
    )
}
export default Movies;