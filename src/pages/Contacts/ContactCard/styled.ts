import styled from "styled-components";

export const StyledContactCard = styled.li`

    padding: 15px;

    width: 100%;
    height: 170px;
    max-width: 500px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 3px solid var(--color-grey-1);
    border-radius: 20px;

    transition: 0.3s ease;

    :hover{
        border: 3px solid var(--color-grey-2);
    }

    button{
        background-color: transparent;
        border: none;
    }

    header{
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        align-items: flex-start;

        >div{
            display: flex;
            align-items: center;
            gap: 10px;
        }

        h3{
            color:var(--color-grey-3);
            font-size: 16px;

            max-width: 70%;
        }
        
        .popup-menu{
            position: relative;
            >button{
                font-size: 24px;
                font-weight: 700;
    
                color: var(--color-grey-1);
            }
            
            div{
                position: absolute;
                bottom: -90px;
                right: -55px;
            }
        }
    }


    .contact-info{
        display: flex;
        flex-direction: column;
        gap: 10px;

        >div{
            display: flex;
            align-items: center;
            gap: 10px;
        }

        button{
            width: 15px;
            height: 15px;

            opacity: 0.7;
            transition: 0.3s ease;
            img{
                pointer-events: none;
                width: 100%;
                height: 100%;
            }

            :hover{
                opacity: 1;
            }
        }

        span{
            font-size: 13px;
            font-weight: 600;
            color: var(--color-grey-3);
        }
    }

`
