import styled from "styled-components";

export const StyledContactList = styled.ul`

    width: 100%;
    margin-top: 100px;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 50px;

    @media(min-width: 800px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(min-width: 1000px){
        grid-template-columns: repeat(3, 1fr);
    }
`