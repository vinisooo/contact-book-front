import { createContext } from "react";
import { iContactProviderProps } from "./interfaces";
import { iContactContextProps } from "./interfaces";

import {useState} from "react";

const ContactContext = createContext({} as iContactContextProps);

const ContactProvider = ({children}: iContactProviderProps) => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");

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
  
    
    return(
        <ContactContext.Provider value={{phoneNumber, setPhoneNumber, handlePhoneNumberChange}}>
            {children}
        </ContactContext.Provider>
    )
}

export {ContactContext, ContactProvider}