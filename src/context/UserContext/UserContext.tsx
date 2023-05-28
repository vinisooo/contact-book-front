import { createContext } from "react";
import { iUserProviderProps } from "./interfaces";
import { iUserContextProps } from "./interfaces";
import { iUser, iUserReq } from "../../interfaces/user.interfaces";

import { api } from "../../services/api";
import {useState} from "react";

import { iUserLogin } from "../../interfaces/user.interfaces";
import { useNavigate } from "react-router-dom";

import jwtDecode from "jwt-decode";

const UserContext = createContext({} as iUserContextProps)

const UserProvider = ({children}: iUserProviderProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<"none" | "success" | "error">("none");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const navigate = useNavigate();

    const { default: jwt_decode } = require("jwt-decode");

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

    const login = async(data: iUserLogin) => {
        setIsLoading(true);
        try{
            const request = await api.post("/users/login", data);
            setIsLoading(false);
            setStatus("success");

            localStorage.setItem("@contact-book: accessToken", request.data.accessToken);
            
            const decodedJwt: any = jwtDecode(request.data.accessToken);

            localStorage.setItem("@contact-book: userId", decodedJwt.sub);

            navigate("/contacts");
        }catch(err: unknown){
            console.log(err);
            setStatus("error");
            setErrorMessage("Email ou senha inválidos");
        }finally{
            disableStatus();
        }
    }

    return(
        <UserContext.Provider value={{registerUser, isLoading, setIsLoading, status, setStatus, errorMessage, setErrorMessage, login}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }