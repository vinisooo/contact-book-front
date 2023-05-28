import { StyledHeader } from "./styled";
import { UserIcon } from "../../../../components/UserIcon/UserIcon";

import {useContext} from "react";
import { AuthContext } from "../../../../context/AuthContext/AuthContext";
import { PopupMenu } from "../../../../components/PopupMenu/PopupMenu";

import { useState } from "react";

export const Header = () => {
    const {user} = useContext(AuthContext);
    const [displayPopup, setDisplayPopup] = useState<boolean>(false);
    
    
    return(
        <StyledHeader>
            <div>
                <div>
                    <UserIcon initialLetter={user?.name[0]}/>
                    <h2>{user?.name}</h2>
                </div>

                <div className="popup-menu">
                    <button onClick={() => setDisplayPopup(!displayPopup)}>...</button>
                    <PopupMenu display={displayPopup}>
                        <button>Editar</button>
                        <button className="red">Sair</button>
                        <button className="red">Excluir conta</button>
                    </PopupMenu>
                </div>
            </div>
        </StyledHeader>
    )
}
