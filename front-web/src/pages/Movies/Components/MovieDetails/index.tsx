import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Movie } from 'core/types/Movie';
import { isAllowedByRole } from 'core/utils/auth';
import { makePrivateRequest } from 'core/utils/request';
import MoviewDetailsInfo from '../MovieDetailsInfo';
import MovieReviewCard from '../MovieReviewCard';
import MovieReviewList from '../MovieReviewList'
import './styles.scss'
import MovieDetailLoader from '../Loaders/MovieDetailLoader';

type ParamsType = {
    movieId: string;
}
const MoviewDetails = () => {
    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => {
                setMovie(response.data)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [movieId])

    return (


        <div className="movie-details-main">
            {isLoading ? <MovieDetailLoader /> : (
                <>
                    <MoviewDetailsInfo movie={movie} />
                    
                    {isAllowedByRole(["ROLE_MEMBER"]) ?
                        (
                            <MovieReviewCard
                                movieId={movie?.id}

                            />
                        ) : null
                    }
                    <div className="movie-details-list">

                        {
                            movie && (
                                movie?.reviews.length > 0 ?
                                    (
                                        movie?.reviews.map(review => (
                                            <MovieReviewList key={review.id} review={review} />
                                        )).sort((a, b) => 1 - 2)
                                    )
                                    : (<h3 className="movie-details-list-default">
                                        {isAllowedByRole(["ROLE_MEMBER"]) ? "Seja o primeiro a avaliar!" : "Filme não possui avaliação!"}
                                    </h3>)
                            )
                        }
                    </div>
                </>
            )}
        </div >
    )
}
export default MoviewDetails;