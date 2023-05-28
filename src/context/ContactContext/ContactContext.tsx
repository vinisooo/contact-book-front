import { createContext, useEffect } from "react";
import { iContactProviderProps } from "./interfaces";
import { iContactContextProps } from "./interfaces";

import {useState} from "react";
import { api } from "../../services/api";
import { iContact, iContactReq, iContactUpdate } from "../../interfaces/contact.interfaces";

const ContactContext = createContext({} as iContactContextProps);

const ContactProvider = ({children}: iContactProviderProps) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [contacts, setContacts] = useState<iContact[]>([]);

  const [editContactModal, setEditContactModal] = useState<boolean>(false);
  const [editContactId, setEditContactId] = useState<number | null>(null);

  const token = localStorage.getItem("@contact-book: accessToken");
  const userId = localStorage.getItem("@contact-book: userId");

  console.log(editContactModal);

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
  },[]);

  const createContact = async(data: iContactReq) => {
    try{
      const request = await api.post("/contacts", data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      getContacts();
    }catch(err){
      console.log(err);
    }
  }

  const deleteContact = async(contactId: number) => {
    try{
      const request = await api.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      getContacts();
    }catch(err){
      console.log(err);
    }
  }

  const updateContact = async(data: iContactUpdate) => {
    try{
      const request = await api.patch(`/contacts/${editContactId}`,data, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })

      getContacts();
      setEditContactId(null)
      setEditContactModal(false);
    }catch(err){
      console.log(err);
    }
  }
  
  return(
      <ContactContext.Provider value={{phoneNumber, setPhoneNumber, handlePhoneNumberChange, createContact, contacts, setContacts, deleteContact, editContactModal, setEditContactModal, editContactId, setEditContactId, updateContact}}>
          {children}
      </ContactContext.Provider>
  )
}

export {ContactContext, ContactProvider}