import useLogin from "../hooks/useLogin"

const LoginPage = () => {

    const { onLogin } = useLogin();

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button 
            onClick={onLogin}
            className="btn btn-dark">
                Login
            </button>
        </div>
    )
}

export default LoginPage