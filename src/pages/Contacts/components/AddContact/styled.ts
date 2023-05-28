import styled from "styled-components";

export const StyledAddContact = styled.div`
    
    width: 100%;

    margin-top: 150px;

    header{
        display: flex;
        align-items: center;
        gap: 30px;

        button{
            width: 15%;
        }

        .open{
            border: 3px solid var(--color-grey-3);
            color: var(--color-grey-3);
            background-color: transparent;
        }
    }

    h1{
        font-weight: 600;
        color: var(--color-grey-3);
        font-size: 24px;
    }

    form{
        margin-top: 40px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 25px;

        animation: displayForm 0.5s ease;

        fieldset, input, button{
            width: 100%;
            max-width: 270px;
        }
    }

    @keyframes displayForm {
        from{
            opacity: 0;
            transform: translateY(50px);
        }to{
            opacity: 1;
            transform: translateY(0);
        }
    }

`
