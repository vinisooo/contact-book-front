import { InputField } from "../../../../components/InputField/InputField";
import { Modal } from "../../../../components/Modal/Modal";
import { StyledButton } from "../../../../styles/Button";

import { useContext } from "react";
import { ContactContext } from "../../../../context/ContactContext/ContactContext";

import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactUpdateSerializer } from "../../../../serializers/contact.serializer";
import { UserContext } from "../../../../context/UserContext/UserContext";

export const EditUserModal = () => {
    const {handlePhoneNumberChange, phoneNumber} = useContext(ContactContext);
    const {editUserModal, updateUser} = useContext(UserContext);

    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        resolver: zodResolver(contactUpdateSerializer),
        mode: "all",
    });

    const onSubmit = (data: any) => {
        if(data.name == ""){
            delete data.name;
        }if(data.email == ""){
            delete data.email;
        }if(data.phone == ""){
            delete data.phone;
        }if(data.password == ""){
            delete data.phone;
        }
        updateUser(data);
        reset();
    }

    if(!editUserModal){
        return <></>
    }
    return(
        <Modal title="Editar perfil">
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputField required={false} errors={errors.name?.message} register={register("name")} placeholder="nome"/>
                <InputField required={false} type="email" errors={errors.email?.message} register={register("email")} placeholder="email"/>
                <InputField required={false} errors={errors.phone?.message} maxLength={16} value={phoneNumber}onChange={handlePhoneNumberChange} register={register("phone")} placeholder="telefone"/>
                <StyledButton type="submit">Editar</StyledButton>
            </form>
        </Modal>   
    )
}
