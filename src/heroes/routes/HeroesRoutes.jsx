import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "../../ui/components/Navbar"
import Marvelpage from "../pages/MarvelPage"
import DcPage from "../pages/DcPage"
import SearchPage from "../pages/SearchPage"
import HeroPage from "../pages/HeroPage"



const HeroesRoutes = () => {


    return (
        <>
            <Navbar />

            <div className="container mb-5">

                <Routes>

                    <Route path="marvel" element={ <Marvelpage /> }/>
                    <Route path="dc" element={ <DcPage /> }/>
                    <Route path="search" element={ <SearchPage />} />
                    <Route path="/hero/:id" element={ <HeroPage />} />

                    <Route path="/" element={ <Navigate to="/marvel" /> } />
                
                </Routes>

            </div>
        </>
    )
}

export default HeroesRoutes