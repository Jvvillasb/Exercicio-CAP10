import './styles.scss';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { makePrivateRequest } from 'core/utils/request';
import { Genre } from 'core/types/Movie';

type Props = {
    handleChangeGenre: (genre: Genre) => void;
}

const MovieFilter = ({ handleChangeGenre }: Props) => {
    const [isLoadingGenres, setIsLoadingGenres] = useState(false);
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        setIsLoadingGenres(true);
        makePrivateRequest({ url: `/genres/` })
            .then(response => {
                setGenres(response.data)
            })
            .finally(() => {
                setIsLoadingGenres(false);
            })
    }, [])


    return (
        <Select
            name="genres"
            isLoading={isLoadingGenres}
            options={genres}
            getOptionLabel={(option: Genre) => option.name}
            getOptionValue={(option: Genre) => String(option.id)}
            className="select-container"
            classNamePrefix="movie-genre-select"
            placeholder="Gêneros"
            onChange={g => handleChangeGenre(g as Genre)}
            isClearable
        />
    )
}

export default MovieFilter;