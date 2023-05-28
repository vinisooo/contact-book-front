import { ContactContext } from "../../context/ContactContext/ContactContext";
import { StyledModal } from "./styled";

import { useContext, useEffect, useRef } from "react";

interface iModalProps{
    children: React.ReactNode;
    title?: string;
}

export const Modal = ({children, title}: iModalProps) => {
    const {setEditContactModal, setEditContactId} = useContext(ContactContext);

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setEditContactModal(false);
                setEditContactId(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return(
        <StyledModal>
            <div ref={modalRef} className="modal">
                <header>
                    <h2>{title}</h2>
                </header>
                {children}
            </div>
        </StyledModal>
    )
}
