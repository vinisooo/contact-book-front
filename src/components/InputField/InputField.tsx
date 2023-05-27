import { StyledInputField } from "./styled";

interface iInputFieldProps {
    type?: string;
    placeholder?: string;
    errors?: any;
    register?: object;
    value?: string;
    maxLength?: number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}


export const InputField = ({type, placeholder, errors, onChange, register, value, maxLength}: iInputFieldProps) => {

    return(
        <StyledInputField>
            <input value={value} maxLength={maxLength} className={errors ? "unvalid" : ""} {...register} onChange={onChange} required id={placeholder} type={type}/>
            <label htmlFor={placeholder}>{placeholder}</label>
            {errors && <span>{errors}</span>}
        </StyledInputField>
    )
}