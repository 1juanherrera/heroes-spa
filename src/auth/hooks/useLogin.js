import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useLogin = () => {

    const { login } = useContext( AuthContext );
    const navigate = useNavigate();

    const onLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        login( 'Juan Herrera' );

        navigate( lastPath, {
            replace: true
          });
    }

    return {
        onLogin
    }
}

export default useLogin