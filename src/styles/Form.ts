import styled from "styled-components";

export const StyledForm = styled.div`

    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    > div{
        width: 100%;
        max-width: 400px;
    }

    header{
        width: 100%;
        margin-bottom: 23px;
        h1{
            color: var(--color-grey-3);
            font-weight: 700;
        }
    }

    form{
        width: 100%;

        display: flex;
        flex-direction: column;

        gap: 23px;
    }

    a{
        text-decoration: none;
        font-weight: 500;
        color: var(--color-grey-1);
        
        transition: 0.3s ease;
        margin-top: 23px;
    }

    a:hover{
        color: var(--color-grey-3)
    }
`
