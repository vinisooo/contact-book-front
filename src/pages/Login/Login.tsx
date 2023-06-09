import { StyledForm } from "../../styles/Form";
import { InputField } from "../../components/InputField/InputField";
import { StyledButton } from "../../styles/Button";

import { useForm } from "react-hook-form";
import { userLoginSerializer } from "../../serializers/user.serializer";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";

import { zodResolver } from '@hookform/resolvers/zod';

import { Link } from "react-router-dom";


export const Login = () => {
    const { login } = useContext(AuthContext);

    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        resolver: zodResolver(userLoginSerializer),
        mode: "all"
    });

    const onSubmit = (data: any) => {
        login(data);
    }

    return(
        <StyledForm>
            <div>
                <header>
                    <h1>Entrar</h1>
                </header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputField required={true} errors={errors.email?.message} register={register("email")} placeholder="email"/>
                    <InputField required={true} type="password" errors={errors.password?.message} register={register("password")} placeholder="senha"/>
                    <StyledButton>Entrar</StyledButton>
                </form>
                <Link to="/register">Não tenho uma conta</Link>
            </div>
        </StyledForm>
    )
}
