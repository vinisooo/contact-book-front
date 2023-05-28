import { createContext, useEffect } from "react";
import { iContactProviderProps } from "./interfaces";
import { iContactContextProps } from "./interfaces";

import {useState} from "react";
import { api } from "../../services/api";
import { iContact } from "../../interfaces/contact.interfaces";

const ContactContext = createContext({} as iContactContextProps);

const ContactProvider = ({children}: iContactProviderProps) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [contacts, setContacts] = useState<iContact[]>([]);

  const token = localStorage.getItem("@contact-book: accessToken");
  const userId = localStorage.getItem("@contact-book: userId");

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let formattedNumber = e.target.value;

    formattedNumber = formattedNumber.replace(/\D/g, '');

    if (formattedNumber.length > 2) {
      formattedNumber = `+${formattedNumber.slice(0, 2)} ${formattedNumber.slice(2)}`;
    }

    if (formattedNumber.length > 7) {
      formattedNumber = `${formattedNumber.slice(0, 6)} ${formattedNumber.slice(6)}`;
    }

    setPhoneNumber(formattedNumber);
  };

  const getContacts = async() => {
    try{
      const request = await api.get<Promise<iContact[]>>(`/users/${userId}/contacts`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })

      setContacts(await request.data);
    }catch(err: unknown){
      console.log(err);
    }
  }

  useEffect(() => {
    getContacts();
  },[])
  
  return(
      <ContactContext.Provider value={{phoneNumber, setPhoneNumber, handlePhoneNumberChange}}>
          {children}
      </ContactContext.Provider>
  )
}

export {ContactContext, ContactProvider}