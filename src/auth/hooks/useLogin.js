import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useLogin = () => {

    const { login } = useContext( AuthContext );
    const navigate = useNavigate();

    const onLogin = () => {

        login('Juan Herrera');

        navigate('/', {
            replace: true
        });
    }

    return {
        onLogin
    }
}

export default useLogin