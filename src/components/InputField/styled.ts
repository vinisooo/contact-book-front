import styled from "styled-components";

export const StyledInputField = styled.fieldset`

    width: 100%;

    border: none;
    
    position: relative;
    
    input{
        border: 3px solid var(--color-grey-1);
        border-radius: 6px;
        
        width: 100%;
        padding: 10px;

        outline: none;
        
        color: var(--color-grey-3);
        font-weight: 600;

        transition: 0.3s ease;

        :hover{
            border-color: var(--color-grey-2);
        }
    }

    label{
        pointer-events: none;
        position: absolute;

        top: 6px;
        left: 10px;

        padding: 5px;

        background-color: var(--total-white);
        color: var(--color-grey-1);

        transition: 0.3s ease;

    }

    input:valid ~ label,
    input:focus ~ label{
        color: var(--color-grey-2);

        font-weight: 600;
        transform: scale(0.9);

        top: -15px;
    }

    span{
        font-size: 12px;
        font-weight: 500;
        color: var(--color-red);
    }

    .unvalid{
        border: 3px solid var(--color-red);
        color: red;
    }
`