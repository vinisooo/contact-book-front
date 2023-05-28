import { iContactReq } from "../../interfaces/contact.interfaces";

interface iContactProviderProps{
    children: React.ReactNode
}

interface iContactContextProps {
    phoneNumber: string;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
    handlePhoneNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    createContact: (data: iContactReq) => Promise<void>
}

export type {iContactProviderProps, iContactContextProps}