import HeroCard from '../components/HeroCard'
import { motion } from 'framer-motion'
import useSearchPage from '../../hooks/useSearchPage'

const SearchPage = () => {

    const { 
        heroes, 
        searchText, 
        showError,  
        q, 
        showSearch,
        onInputChange, 
        onSearchSubmit } = useSearchPage();

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

                    <button className="btn btn-outline-primary mt-3">
                        Search
                    </button>
                </form>
            </div>

            <div className="col-7">
                <h4>Results</h4>
                <hr />

                <motion.div 
                initial={{ scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                style={{ display: showSearch ? '' : 'none' }}
                className="alert alert-primary"
                >Search a hero
                </motion.div>

                <div 
                className="alert alert-danger" 
                style={{ display: showError ? '' : 'none' }}
                >No hero with <b>{ q }</b>
                </div>
       
                {
                    heroes.map( hero => (
                        <HeroCard key={hero.id} { ...hero } />
                    ))
                }        

            </div>

            </div>

        </>
    )
}

export default SearchPage