import { useNavigate } from "react-router-dom"


const useLogin = () => {

    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/marvel')
    }

    return {
        onLogin
    }
}

export default useLogin