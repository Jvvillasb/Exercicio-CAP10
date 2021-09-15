import './styles.scss'
import { Movie } from 'core/types/Movie';

type Props ={
    movie: Movie;
}

const MovieCard = ({ movie }:Props) => {

    return (
        <div className="movie-card-main">
            
                <img className="movie-card-img" src={movie.imgUrl} alt="" />
            
            <div className="move-card-info">
                <div className="movie-card-title">
                    {movie.title}
                </div>
                <div className="movie-card-year">
                    {movie.year}
                </div>
                <div className="movie-card-subtitle">
                    {movie.subTitle}
                </div>
            </div>
        </div>
    )
}
export default MovieCard;