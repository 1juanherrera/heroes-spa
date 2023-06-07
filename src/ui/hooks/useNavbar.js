import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        })
    }

    return {
        onLogout
    }
}

export default Navbar