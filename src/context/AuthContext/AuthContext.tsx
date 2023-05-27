import { createContext } from "react";
import { iAuthProviderProps } from "./interfaces";

const AuthContext = createContext({})

const AuthProvider = ({children}: iAuthProviderProps) => {
    return(
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }