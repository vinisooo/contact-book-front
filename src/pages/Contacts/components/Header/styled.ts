import styled from "styled-components";

export const StyledHeader = styled.header`

    width: 100%;
    margin: 0;
    padding: 0;
    background-color: var(--total-white);
    box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.15);

    > div{
        margin: 0 auto;
        width: 100%;
        max-width: 1200px;
        padding: 15px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        
        >div{
            display: flex;
            align-items: center;
            gap: 20px;

            h2{
                font-size: 20px;
                color: var(--color-grey-3);
                font-weight: 600;
            }
        }
    }
    
    .popup-menu{

        position: relative;

        >div{
            position:absolute;
            bottom: -120px;
            right: -50px;
        }

        > button{
            display: flex;
            align-items: center;
            justify-content: center;
    
            background-color: transparent;
    
            border: none;
            font-size: 32px;
            font-weight: 800;
    
            border-radius: 50%;
    
            transform: translateY(-8px);
    
            color: var(--color-grey-1);
    
            transition: 0.3s ease;
    
            :hover{
                color: var(--color-grey-2);
            }
        }
    }


`
