import { Header } from "./components/Header/Header";
import { StyledContainer } from "../../styles/Container";
import { AddContact } from "./components/AddContact/AddContact";

import { StyledContactList } from "./styled";
import { ContactCard } from "./ContactCard/ContactCard";

import { useContext } from "react";
import { ContactContext } from "../../context/ContactContext/ContactContext";

export const Contacts = () => {
    const {contacts} = useContext(ContactContext);

    return(
        <>
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