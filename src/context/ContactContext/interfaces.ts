import React from "react";
import { iContactReq } from "../../interfaces/contact.interfaces";
import { iContact } from "../../interfaces/contact.interfaces";

interface iContactProviderProps{
    children: React.ReactNode
}

interface iContactContextProps {
    phoneNumber: string;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
    contacts: iContact[];
    setContacts: React.Dispatch<React.SetStateAction<iContact[]>>
    handlePhoneNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    createContact: (data: iContactReq) => Promise<void>;
}

export type {iContactProviderProps, iContactContextProps}