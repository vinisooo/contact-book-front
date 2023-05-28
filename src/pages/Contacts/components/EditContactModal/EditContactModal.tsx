import { InputField } from "../../../../components/InputField/InputField";
import { Modal } from "../../../../components/Modal/Modal";
import { StyledButton } from "../../../../styles/Button";

import { useContext } from "react";
import { ContactContext } from "../../../../context/ContactContext/ContactContext";

import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactUpdateSerializer } from "../../../../serializers/contact.serializer";

export const EditContactModal = () => {
    const {editContactModal, setEditContactModal, handlePhoneNumberChange, phoneNumber} = useContext(ContactContext);

    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        resolver: zodResolver(contactUpdateSerializer),
        mode: "all"
    });

    const onSubmit = (data: any) => {
        console.log(data);
    }

    if(!editContactModal){
        return <></>
    }
    return(
        <Modal title="Editar contato">
            <form>
                <InputField errors={errors.name?.message} register={register("name")} placeholder="nome"/>
                <InputField errors={errors.email?.message} register={register("email")} placeholder="email"/>
                <InputField errors={errors.phone?.message} maxLength={16} value={phoneNumber} onChange={handlePhoneNumberChange} register={register("phone")} placeholder="telefone"/>
                <StyledButton type="submit">Editar</StyledButton>
            </form>
        </Modal>   
    )
}
