import { useNavigate } from "react-router-dom"


const useLogin = () => {

    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/', {
            replace: true
        })
    }

    return {
        onLogin
    }
}

export default useLogin