import { iUser, iUserLogin, iUserReq, iUserUpdate } from "../../interfaces/user.interfaces"

interface iUserContextProps {
    registerUser: (data: iUserReq) => void;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    status: "none" | "success" | "error";
    setStatus: React.Dispatch<React.SetStateAction<"none" | "success" | "error">>;
    errorMessage: string;
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
    disableStatus: () => void;
    deleteUser: () => Promise<void>;
    editUserModal: boolean;
    setEditUserModal: React.Dispatch<React.SetStateAction<boolean>>;
    updateUser: (data: iUserUpdate) => Promise<void>;
}

interface iUserProviderProps{
    children: React.ReactNode;
}

export type{ iUserProviderProps, iUserContextProps }