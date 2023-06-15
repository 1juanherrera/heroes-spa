import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import getHeroByName from '../heroes/helpers/getHeroByName'
import { useForm } from './useForm'

const useSearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );
    const heroes = getHeroByName(q);

    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && heroes.length === 0;

    const { searchText, onInputChange } = useForm({
        searchText: ''
    });

    const onSearchSubmit = ( event ) => {
        event.preventDefault();

        navigate(`?q=${ searchText.toLowerCase() }`)
    }

    return {
        q,
        heroes,
        showError,
        searchText,
        showSearch,
        onInputChange,
        onSearchSubmit
    }
}

export default useSearchPage