import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`

    return ( 
        <motion.div 
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
        }}
        className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ heroImageUrl } className="card-img" alt={ superhero }/>
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h4 className="card-title text-base fw-semibold">{ superhero }</h4>
                            <p className="card-text">{ alter_ego }</p>

                            {
                                alter_ego !== characters && <p>{ characters }</p>
                            }

                            <p className="card-text">
                                <small className="text-muted fst-italic">{ first_appearance }</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                Más... 
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default HeroCard