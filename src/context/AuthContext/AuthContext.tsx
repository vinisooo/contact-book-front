import { createContext } from "react";
import { iAuthContextProps, iAuthProviderProps } from "./interfaces";

import { api } from "../../services/api";

import { useContext } from "react";
import { ContactContext } from "../ContactContext/ContactContext";
import {useState} from "react";

import {useEffect} from "react";
import { iUser } from "../../interfaces/user.interfaces";
import { iUserLogin } from "../../interfaces/user.interfaces";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

import jwtDecode from "jwt-decode";


const AuthContext = createContext({} as iAuthContextProps)

const AuthProvider = ({children}: iAuthProviderProps) => {
    const [user, setUser] = useState<iUser | null>(null);

    const { default: jwt_decode } = require("jwt-decode");

    const {setContacts} = useContext(ContactContext);
    const {isLoading, setIsLoading, setStatus, setErrorMessage, disableStatus} = useContext(UserContext);

    const userId = localStorage.getItem("@contact-book: userId");
    const token = localStorage.getItem("@contact-book: accessToken");

    const navigate = useNavigate();

    const getLoggedUser = async(userId: number, token: string | null) => {
        try{
            const request = await api.get(`/users/logged/${userId}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setUser(request.data);
            setContacts(request.data.contacts);
            
            navigate("/contacts");

        }catch(err){
            console.log(err)
            navigate("/login");
        }
    }

    
    const login = async(data: iUserLogin) => {
        setIsLoading(true);
        try{
            const request = await api.post("/users/login", data);
            setIsLoading(false);
            setStatus("success");

            const decodedJwt: any = jwtDecode(request.data.accessToken);
            
            localStorage.setItem("@contact-book: accessToken", request.data.accessToken);
            localStorage.setItem("@contact-book: userId", decodedJwt.sub);
            
            await getLoggedUser(Number(decodedJwt.sub), request.data.accessToken);

            navigate("/contacts");
        }catch(err: unknown){
            console.log(err);
            setStatus("error");
            setErrorMessage("Email ou senha inválidos");
        }finally{
            disableStatus();
        }
    }

    useEffect(() => {
        getLoggedUser(Number(userId), token);
    },[]);

    return(
        <AuthContext.Provider value={{user, setUser, login}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }