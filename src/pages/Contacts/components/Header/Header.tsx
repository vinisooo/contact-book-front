import { StyledHeader } from "./styled";
import { UserIcon } from "../../../../components/UserIcon/UserIcon";

import {useContext} from "react";
import { AuthContext } from "../../../../context/AuthContext/AuthContext";

export const Header = () => {
    const {user} = useContext(AuthContext);
    
    return(
        <StyledHeader>
            <div>
                <div>
                    <UserIcon initialLetter={user?.name[0]}/>
                    <h2>{user?.name}</h2>
                </div>

                <button>...</button>
            </div>
        </StyledHeader>
    )
}
