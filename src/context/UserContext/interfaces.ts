import { iUserReq } from "../../interfaces/user.interfaces"

interface iUserContextProps {
    registerUser: (data: iUserReq) => void
}

interface iUserProviderProps{
    children: React.ReactNode
}

export type{ iUserProviderProps, iUserContextProps }