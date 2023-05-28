import styled from "styled-components";

export const StyledPopupMenu = styled.div`

    min-width: 130px;

    border-radius: 11px;

    background-color: var(--color-grey-3);

    padding: 5px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;

    position: relative;
    z-index: 4;

    animation: displayPopup 0.2s ease-in;

    ::before{
        content:"";
        position:absolute;
        width: 0px;
        height: 0px;

        border-left: 13px solid transparent;
        border-right: 13px solid transparent;
        border-bottom: 13px solid var(--color-grey-3);

        z-index: 3;
        top: -10px;
        right: 45%;
        left: 42%;
    }

    button, span {
        border: none;
        border-radius: 6px;

        text-align: left;

        width: 100%;
        padding: 10px;
        margin: 0;

        color: var(--color-grey-1);
        background-color: transparent;

        transition: 0.2s ease;

        font-weight: 500;
        font-size: 12px;

        cursor: pointer;

        :hover{
            color: var(--total-white);
            filter: brightness(0.9);
        }

    }
    .red{
        color: var(--color-red);
    }

    .red-delete{
        color: var(--color-grey-3);
        background-color: var(--color-red);
    }

    @keyframes displayPopup {
        from{
            opacity: 0;
            transform: translateY(10px)
        }to{
            opacity: 1;
            transform: translateY(0);
        }
    }
`
