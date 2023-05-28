import { useState, useContext } from "react"
import { StyledAddContact } from "./styled";
import { StyledButton } from "../../../../styles/Button";
import { InputField } from "../../../../components/InputField/InputField";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactReqSerializer } from "../../../../serializers/contact.serializer";
import { iContactReq } from "../../../../interfaces/contact.interfaces";

import { ContactContext } from "../../../../context/ContactContext/ContactContext";

export const AddContact = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {handlePhoneNumberChange, phoneNumber, setPhoneNumber, createContact} = useContext(ContactContext);

    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        resolver: zodResolver(contactReqSerializer)
    });

    const onSubmit = (data: iContactReq) => {
        createContact(data);
        reset();
        setPhoneNumber("");
        setIsOpen(false);
    }

    return(
        <StyledAddContact>
            <header>
                <h1>Contatos</h1>
                <StyledButton onClick={() => setIsOpen(!isOpen)} className={isOpen ? "open" : ""}>{isOpen ? "Cancelar" : "Adicionar"}</StyledButton>
            </header>
            {
                isOpen &&
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputField errors={errors.name?.message} register={register("name")} placeholder="nome"/>
                    <InputField errors={errors.email?.message} register={register("email")} placeholder="email"/>
                    <InputField maxLength={16} onChange={handlePhoneNumberChange} value={phoneNumber} errors={errors.phone?.message} register={register("phone")} placeholder="telefone"/>
                    <StyledButton type="submit">Adicionar</StyledButton>
                </form>
            }
        </StyledAddContact>
    )
}
