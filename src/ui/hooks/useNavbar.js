import { useNavigate } from "react-router-dom";
import AuthContext from "../../auth/context/AuthContext";
import { useContext } from "react";

const Navbar = () => {

    const { user, logout } = useContext( AuthContext );

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        })
    }

    return {
        onLogout,
        user,
        logout
    }
}

export default Navbar