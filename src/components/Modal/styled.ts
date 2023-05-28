import styled from "styled-components";

export const StyledModal = styled.div`

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0,0.8);

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    z-index: 10;

    transition: 0.3s ease;
    .modal{
        margin: 20px;
        width: 100%;
        max-width: 370px;

        padding: 25px;
        padding-top: 30px;
        padding-bottom: 30px;

        background-color: white;
        border-radius: 20px;
        border: 3px solid var(--color-grey-1);

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 25px;

        h2{
            font-size: 24px;
            color: var(--color-grey-3);
        }

        form{
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }
`
