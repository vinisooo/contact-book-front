import { createContext } from "react";
import { iUserProviderProps } from "./interfaces";

const UserContext = createContext({})

const UserProvider = ({children}: iUserProviderProps) => {
    return(
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }