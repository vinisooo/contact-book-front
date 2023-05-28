import { createContext } from "react";
import { iAuthContextProps, iAuthProviderProps } from "./interfaces";

import { api } from "../../services/api";

import { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import {useState} from "react";

import {useEffect} from "react";
import { iUser } from "../../interfaces/user.interfaces";

import { useNavigate } from "react-router-dom";

const AuthContext = createContext({} as iAuthContextProps)

const AuthProvider = ({children}: iAuthProviderProps) => {
    const [user, setUser] = useState<iUser | null>(null);

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

            navigate("/contacts");

        }catch(err){
            console.log(err)
            navigate("/login");
        }
    }

    useEffect(() => {
        getLoggedUser(Number(userId), token);
    },[]);

    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }