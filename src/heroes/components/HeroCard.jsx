import { Link } from "react-router-dom"

const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`

    return ( 
        <div className="col">
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

                            <Link to={`/hero${id}`}>
                                Más... 
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard