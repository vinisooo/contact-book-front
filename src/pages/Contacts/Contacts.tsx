import { Header } from "./components/Header/Header";
import { StyledContainer } from "../../styles/Container";
import { AddContact } from "./components/AddContact/AddContact";

import { StyledContactList } from "./styled";
import { ContactCard } from "./ContactCard/ContactCard";

import { useContext } from "react";
import { ContactContext } from "../../context/ContactContext/ContactContext";

import { Modal } from "../../components/Modal/Modal";
import { InputField } from "../../components/InputField/InputField";
import { StyledButton } from "../../styles/Button";

export const Contacts = () => {
    const {contacts, editContactModal} = useContext(ContactContext);

    return(
        <>
            {
                editContactModal &&
                <Modal title="Editar contato">
                    <form>
                        <InputField placeholder="nome"/>
                        <InputField placeholder="email"/>
                        <InputField placeholder="telefone"/>
                        <StyledButton>Editar</StyledButton>
                    </form>
                </Modal>   
            }
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