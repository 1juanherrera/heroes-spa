import { useParams, Navigate } from "react-router-dom"
import getHeroById from "../helpers/getHeroById";


const HeroPage = () => {

    const { id } = useParams();

    const hero = getHeroById( id );

    if( !hero ) {
        return <Navigate to="/marvel" />
    }

    console.log(hero)

    return (
        <>
            <h1>HeroPage</h1>
        </>
    )
}

export default HeroPage