import { StyledInputField } from "./styled";

interface iInputFieldProps {
    type?: string;
    placeholder?: string;
    errors?: any;
    register?: object;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}


export const InputField = ({type, placeholder, errors, onChange, register}: iInputFieldProps) => {

    return(
        <StyledInputField>
            <input className={errors ? "unvalid" : ""} {...register} required id={placeholder} type={type}/>
            <label htmlFor={placeholder}>{placeholder}</label>
            {errors && <span>{errors}</span>}
        </StyledInputField>
    )
}