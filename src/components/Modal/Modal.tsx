import { StyledModal } from "./styled"

interface iModalProps{
    children: React.ReactNode;
    title?: string;
}

export const Modal = ({children, title}: iModalProps) => {
    return(
        <StyledModal>
            <div className="modal">
                <header>
                    <h2>{title}</h2>
                </header>
                {children}
            </div>
        </StyledModal>
    )
}
