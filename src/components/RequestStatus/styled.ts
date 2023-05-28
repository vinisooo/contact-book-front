import styled from "styled-components";

interface iStyledRequestStatusProps {
    loading?: boolean;
}

export const StyledRequestStatus = styled.figure<iStyledRequestStatusProps>`

    width: 70px;
    height: 70px;

    background: transparent;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    z-index: 3;

    bottom: -50vh;
    right: 45vw;
    left: 47vw;
    animation: displayRequestStatus 4s ease;
    
    img{
        object-fit: cover;
        width: 90%;
        height: 90%;
        
        animation: ${props => props.loading == true ? "loadingAnimation 1s infinite linear": "none"};
    }

    p{
        color: var(--color-red);
        margin-left: 20px;

        min-width: 150px;
        font-weight: 600;
    }

    @keyframes loadingAnimation{
        100% { transform: rotate(360deg); }
    }

    @keyframes displayRequestStatus{
        0%{
            opacity: 0;
        }40%{
            transform: translateY(-60vh);
        }80%{
            transform: translateY(-60vh);
        }100%{
            transform: translateY(0);
        }
    }

`