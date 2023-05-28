import { iUser } from "../../interfaces/user.interfaces";
import { iUserLogin } from "../../interfaces/user.interfaces";

interface iAuthProviderProps {
    children: React.ReactNode
}

interface iAuthContextProps{
    user: iUser | null;
    setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
    login: (data: iUserLogin) => Promise<void>;
}

export type{ iAuthContextProps, iAuthProviderProps }