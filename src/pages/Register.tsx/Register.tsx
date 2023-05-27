import { StyledForm } from "../../styles/Form";
import { InputField } from "../../components/InputField/InputField";
import { StyledButton } from "../../styles/Button";

import { useForm } from "react-hook-form";
import { userReqSerializer } from "../../serializers/user.serializer";

import { zodResolver } from '@hookform/resolvers/zod';

export const Register = () => {

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(userReqSerializer)
    });

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return(
        <StyledForm>
            <div>
                <header>
                    <h1>Cadastro</h1>
                </header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputField errors={errors.name?.message} register={register("name")} placeholder="nome"/>
                    <InputField errors={errors.email?.message} register={register("email")} placeholder="email"/>
                    <InputField errors={errors.password?.message} register={register("password")} placeholder="senha"/>
                    <InputField errors={errors.confirmPassword?.message} register={register("confirmPassword")} placeholder="confirmar senha"/>
                    <InputField errors={errors.phone?.message} register={register("phone")} placeholder="telefone"/>
                    <StyledButton>Cadastrar</StyledButton>
                </form>
            </div>
        </StyledForm>
    )
}
