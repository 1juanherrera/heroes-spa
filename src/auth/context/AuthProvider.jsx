import { useReducer } from "react"
import AuthContext from "./AuthContext"
import authReducer from "./authReducer"
import types from "../types/types"

const initialState = {
    logged: false
}

const AuthProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer( authReducer, initialState )

    const onLogin = async( name = '' ) => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: name
            }
        }
        
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{ 
            state,
            login: onLogin
         }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider