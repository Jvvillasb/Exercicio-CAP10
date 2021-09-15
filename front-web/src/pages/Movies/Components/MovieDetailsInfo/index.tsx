import './styles.scss'
import { Movie } from 'core/types/Movie'

type Props ={
    movie?: Movie;
}

const MoviewDetailsInfo = ({ movie }:Props) => {

    return (
        <div className="movie-details-main-info" >
            <div className="movie-details-image-main"> 
                <img 
                    src={movie?.imgUrl} 
                    alt={movie?.title} 
                    className="movie-details-image"
                />
            </div>
            
            <div className="movie-details-text">
                <h1 className="movie-details-text-title">{movie?.title}</h1>
                <h3 className="movie-details-text-year">{movie?.year}</h3>
                <h3 className="movie-details-text-subtitle">{movie?.subTitle}</h3>
                <textarea  className="movie-details-text-synopsis" >
                    {movie?.synopsis}
                </textarea>  
                
            </div> 
        </div>
    )
}
export default MoviewDetailsInfo;