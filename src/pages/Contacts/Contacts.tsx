import { Header } from "./components/Header/Header";
import { StyledContainer } from "../../styles/Container";
import { AddContact } from "./components/AddContact/AddContact";

import { StyledContactList } from "./styled";
import { ContactCard } from "./components/ContactCard/ContactCard";

import { useContext } from "react";
import { ContactContext } from "../../context/ContactContext/ContactContext";

import { EditContactModal } from "./components/EditContactModal/EditContactModal";

export const Contacts = () => {
    const {contacts} = useContext(ContactContext);

    return(
        <>
            <EditContactModal/>
            <Header/>
            <main>
                <StyledContainer>
                    <AddContact/>
                    <StyledContactList>
                        {
                            contacts.map(contact => {
                                return(
                                    <ContactCard contact={contact} key={contact.id}/>
                                )
                            })
                        }
                    </StyledContactList>
                </StyledContainer>
            </main>
        </>
    )
}