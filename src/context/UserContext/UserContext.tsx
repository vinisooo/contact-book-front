import { createContext } from "react";
import { iUserProviderProps } from "./interfaces";
import { iUserContextProps } from "./interfaces";
import { iUserReq } from "../../interfaces/user.interfaces";
import { api } from "../../services/api";

import { Navigate } from "react-router-dom";

const UserContext = createContext({} as iUserContextProps)

const UserProvider = ({children}: iUserProviderProps) => {
    
    const registerUser = async(data: iUserReq) => {
        try{
            const request = await api.post("/users/register", data);

            console.log(request);
            return(
                <Navigate to="/login"/>
            )
        }catch(err: unknown){
            console.log(err);
        }
    }

    return(
        <UserContext.Provider value={{registerUser}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }