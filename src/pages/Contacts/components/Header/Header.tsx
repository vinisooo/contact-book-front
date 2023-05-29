import { StyledHeader } from "./styled";
import { UserIcon } from "../../../../components/UserIcon/UserIcon";

import { PopupMenu } from "../../../../components/PopupMenu/PopupMenu";

import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ContactContext } from "../../../../context/ContactContext/ContactContext";
import { AuthContext } from "../../../../context/AuthContext/AuthContext";
import { UserContext } from "../../../../context/UserContext/UserContext";

export const Header = () => {
    const {user} = useContext(AuthContext);
    const {setEditUserModal, updateUser} = useContext(UserContext);
    const [displayPopupMenu, setDisplayPopupMenu] = useState<boolean>(false);
    const [deleteCounter, setDeleteCounter] = useState<number>(1);

    const editUserEnableModal = () => {
        setDisplayPopupMenu(false);
        setTimeout(() => {
            setEditUserModal(true);
        }, 100)
    }

    const {deleteUser} = useContext(UserContext);
    const {setUser} = useContext(AuthContext);
    const {setContacts} = useContext(ContactContext);

    const popupMenuRef = useRef<HTMLDivElement>(null);
    
    const navigate = useNavigate();

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
    
    const handleDeleteContact=() => {
        if(deleteCounter == 1){
            setDeleteCounter(deleteCounter + 1);
        }else{
            setUser(null);
            deleteUser();
        }
    }

    const logOut = () => {
        localStorage.removeItem("@contact-book: accessToken");
        localStorage.removeItem("@contact-book: userId");

        navigate("/login");
        setUser(null);
        setContacts([]);
    }

    return(
        <StyledHeader>
            <div>
                <div>
                    <UserIcon initialLetter={user?.name[0]}/>
                    <h2>{user?.name}</h2>
                </div>

                <div ref={popupMenuRef} className="popup-menu">
                    <button onClick={() => setDisplayPopupMenu(!displayPopupMenu)}>...</button>
                    <PopupMenu  display={displayPopupMenu}>
                        <button onClick={editUserEnableModal}>Editar</button>
                        <button onClick={logOut} className="red">Sair</button>
                        <button onClick={handleDeleteContact} className={deleteCounter == 2? "red-delete": "red"}>{ deleteCounter === 2 ? "Confirmar" : "Excluir Conta"}</button>
                    </PopupMenu>
                </div>
            </div>
        </StyledHeader>
    )
}
