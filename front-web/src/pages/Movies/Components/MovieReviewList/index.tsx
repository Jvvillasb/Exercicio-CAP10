import './styles.scss'
import {  Review } from 'core/types/Movie';
import { ReactComponent as Star } from 'core/assets/images/star.svg';


type Props ={
    review?: Review;
}

const MovieReviewList = ({ review }:Props) => {
    
    return (
        <div className="movie-review-list-main">
            
            <div className="movie-review-list-info">

                <Star className="movie-review-list-img"/>
                <h3 className="movie-review-list-name">{review?.user.name}</h3>
                
            </div>

            
                <textarea 
                        className="movie-review-list movie-review-list-text"> 
                    
                    {review?.text} 

                </textarea>
            
        </div>
    )
}
export default MovieReviewList;