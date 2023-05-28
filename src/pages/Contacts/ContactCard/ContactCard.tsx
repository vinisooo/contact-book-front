import { UserIcon } from "../../../components/UserIcon/UserIcon";
import { iContact } from "../../../interfaces/contact.interfaces";
import { StyledContactCard } from "./styled";
import { PopupMenu } from "../../../components/PopupMenu/PopupMenu";

import { useState, useEffect, useRef, useContext } from "react";
import { ContactContext } from "../../../context/ContactContext/ContactContext";


const copyToClipboard = (content: string) => {
    const textField = document.createElement('textarea');
    textField.innerText = content;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
};

interface iContactCardProps{
    contact: iContact
}

export const ContactCard = ({contact}: iContactCardProps) => {
    const [displayPopupMenu, setDisplayPopupMenu] = useState<boolean>(false);
    const [deleteCounter, setDeleteCounter] = useState<number>(1);

    const {deleteContact, setEditContactModal, setEditContactId} = useContext(ContactContext);

    const popupMenuRef = useRef<HTMLDivElement>(null);

    const handleCopyEmail = () => {
        copyToClipboard(contact.email);
    };

    const handleCopyPhone = () => {
    copyToClipboard(contact.phone);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupMenuRef.current && !popupMenuRef.current.contains(event.target as Node)) {
                setDisplayPopupMenu(false);
                setDeleteCounter(1);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const editContactEnableModal = () => {
        setEditContactModal(true);
        setEditContactId(contact.id);
    }


    const handleDeleteContact=() => {
        if(deleteCounter == 1){
            setDeleteCounter(deleteCounter + 1);
        }else{
            deleteContact(contact.id);
        }
    }
    
    return(
        <StyledContactCard>
            <header>
                <div>
                    <UserIcon initialLetter={contact.name[0]}/>
                    <h3>{contact.name}</h3>
                </div>
                <div className="popup-menu" ref={popupMenuRef}>
                    <button onClick={() => setDisplayPopupMenu(!displayPopupMenu)}>...</button>
                    <PopupMenu userId={contact.id} display={displayPopupMenu}>
                        <button onClick={editContactEnableModal}>Editar</button>
                        <button onClick={handleDeleteContact} className={deleteCounter == 2? "red-delete": "red"}>{ deleteCounter === 2 ? "Confirmar" : "Excluir"}</button>
                    </PopupMenu>
                </div>
            </header>
            <div className="contact-info">
                <div>
                    <button onClick={handleCopyEmail}>
                        <img src="https://cdn-icons-png.flaticon.com/512/1621/1621635.png"/>
                    </button>
                    <span>{contact.email}</span>
                </div>
                <div>
                    <button onClick={handleCopyPhone}>
                        <img src="https://cdn-icons-png.flaticon.com/512/1621/1621635.png"/>
                    </button>
                    <span>{contact.phone}</span>
                </div>
            </div>
        </StyledContactCard>
    )
}
