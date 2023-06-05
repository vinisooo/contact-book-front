import { StyledForm } from "../../styles/Form";
import { InputField } from "../../components/InputField/InputField";
import { StyledButton } from "../../styles/Button";

import { useForm } from "react-hook-form";
import { userReqSerializer } from "../../serializers/user.serializer";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import { ContactContext } from "../../context/ContactContext/ContactContext";

import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from "react-router-dom";

export const Register = () => {
    const { phoneNumber, setPhoneNumber,handlePhoneNumberChange } = useContext(ContactContext);
    const { registerUser } = useContext(UserContext);

    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        resolver: zodResolver(userReqSerializer),
        mode: "all"
    });

    const onSubmit = (data: any) => {
        registerUser(data);
        setPhoneNumber("");
    }

    return(
        <StyledForm>
            <div>
                <header>
                    <h1>Cadastro</h1>
                </header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputField required={true} errors={errors.name?.message} register={register("name")} placeholder="nome"/>
                    <InputField required={true} errors={errors.email?.message} register={register("email")} placeholder="email"/>
                    <InputField required={true} type="password" errors={errors.password?.message} register={register("password")} placeholder="senha"/>
                    <InputField required={true} type="password" errors={errors.confirmPassword?.message} register={register("confirmPassword")} placeholder="confirmar senha"/>
                    <InputField required={true} maxLength={16} onChange={handlePhoneNumberChange} value={phoneNumber} errors={errors.phone?.message} register={register("phone")} placeholder="telefone"/>
                    <StyledButton>Cadastrar</StyledButton>
                </form>
                <Link to="/login">Já tenho uma conta</Link>
            </div>
        </StyledForm>
    )
}
