import React from "react";
import { iContactReq, iContactUpdate } from "../../interfaces/contact.interfaces";
import { iContact } from "../../interfaces/contact.interfaces";

interface iContactProviderProps{
    children: React.ReactNode
}

interface iContactContextProps {
    phoneNumber: string;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
    contacts: iContact[];
    setContacts: React.Dispatch<React.SetStateAction<iContact[]>>;
    handlePhoneNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    createContact: (data: iContactReq) => Promise<void>;
    deleteContact: (contactId: number) => Promise<void>;
    editContactModal: boolean;
    setEditContactModal: React.Dispatch<React.SetStateAction<boolean>>;
    editContactId: number | null;
    setEditContactId: React.Dispatch<React.SetStateAction<number | null>>;
    updateContact: (data: iContactUpdate) => Promise<void>;
}

export type {iContactProviderProps, iContactContextProps}