import { useForm } from '../../hooks/useForm'
import HeroCard from '../components/HeroCard'

const SearchPage = () => {

    const { searchText, onInputChange } = useForm({
        searchText: ''
    })

    const onSearchSubmit = ( event ) => {
        event.preventDefault();

        console.log({ searchText })
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">

            <div className="col-5">
                <h4>Searching</h4>
                <hr />
                <form onSubmit={ onSearchSubmit }>
                    <input 
                    placeholder="Search a hero"
                    className="form-control"
                    autoComplete="off"
                    name="searchText"
                    type="text"
                    value={ searchText }
                    onChange={ onInputChange }
                    />

                    <button className="btn btn-outline-dark mt-3">
                        Search
                    </button>
                </form>
            </div>

            <div className="col-7">
                <h4>Results</h4>
                <hr />

                <div className="alert alert-dark">
                    Search a hero
                </div>

                <div className="alert alert-danger">
                    No hero with <b>ABC</b>
                </div>

                {/* <HeroCard { ...hero } /> */}

            </div>

            </div>

        </>
    )
}

export default SearchPage