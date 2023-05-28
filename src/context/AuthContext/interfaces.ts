import { iUser } from "../../interfaces/user.interfaces";

interface iAuthProviderProps {
    children: React.ReactNode
}

interface iAuthContextProps{
    user: iUser | null;
    setUser: React.Dispatch<React.SetStateAction<iUser | null>>
}

export type{ iAuthContextProps, iAuthProviderProps }