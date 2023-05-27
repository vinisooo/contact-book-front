import { ContactProvider } from "./ContactContext/ContactContext";
import { AuthProvider } from "./AuthContext/AuthContext";
import { UserProvider } from "./UserContext/UserContext";


interface iContextProviderProps{
    children: React.ReactNode
}

export const ContextProvider = ({children}: iContextProviderProps) => {
    return(
        <UserProvider>
            <ContactProvider>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </ContactProvider>
        </UserProvider>
    )
}
