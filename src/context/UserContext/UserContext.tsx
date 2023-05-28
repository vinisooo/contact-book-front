import { createContext } from "react";
import { iUserProviderProps } from "./interfaces";
import { iUserContextProps } from "./interfaces";
import { iUserReq } from "../../interfaces/user.interfaces";

import { api } from "../../services/api";
import {useState} from "react";

import { useNavigate } from "react-router-dom";

const UserContext = createContext({} as iUserContextProps)

const UserProvider = ({children}: iUserProviderProps) => {
    const [status, setStatus] = useState<"none" | "success" | "error">("none");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const navigate = useNavigate();

    const disableStatus = () => {
        setIsLoading(false);
        setTimeout(() => {
            setStatus("none");
        }, 3000)
    }

    const registerUser = async(data: iUserReq) => {
        setIsLoading(true);
        try{
            const request = await api.post("/users/register", data);
            setIsLoading(false);
            setStatus("success");
        }catch(err: any){
            console.log(err);
            if(err.response.detail === "Email already exists"){
                setErrorMessage("Este email já está cadastrado");
            }
            setStatus("error");
        }finally{
            disableStatus();
        }
    }

    return(
        <UserContext.Provider value={{registerUser, isLoading, setIsLoading, status, setStatus, errorMessage, setErrorMessage, disableStatus}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }