import './styles.scss'
import { useForm } from 'react-hook-form';
import { makePrivateRequest } from 'core/utils/request';
import { toast } from 'react-toastify';
type Props ={
    movieId?: number;
}
type FormState = {
    text: string;
    movieId:number;
    
}
const MovieReviewCard = ({ movieId }:Props) => {
    const { register, handleSubmit, errors } = useForm<FormState>();
    
    const onSubmit = (data: FormState) => {
        const payload ={
            ...data,
            movieId: movieId
        }
        makePrivateRequest({
            url: `/reviews/`,
            method: 'POST',
            data: payload
        })
            .then(() => {
                window.location.reload();
            })
            .catch(e => {
                toast.error("Falha ao salvar review")                
            })
    }
    return (
        <div className="movie-review-card-main">
            <textarea
                name="text"
                ref={register({ 
                    required: "Campo obrigatório",
                    minLength: { value: 10, message: "O campo deve ter minímo 10 caracteres" },
                    validate: (value) => { return !!value.trim() || "Sua avaliação está em branco" }
                })}
                
                className={`movie-review-input ${errors.text ? 'is-invalid' : ''}`} 
                placeholder="Deixe sua avaliação aqui"
            />
            {errors.text && (
                                <div className="invalid-feedback-default d-block">
                                    {errors.text.message}
                                </div>
            )}

            

            
            <button
                className="movie-review-btn"
                onClick={handleSubmit(onSubmit)}
            >
                SALVAR AVALIAÇÃO
            </button>  
            
        </div>
    )
}
export default MovieReviewCard;