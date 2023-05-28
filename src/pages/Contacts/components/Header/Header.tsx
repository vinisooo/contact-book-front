import { StyledHeader } from "./styled";
import { UserIcon } from "../../../../components/UserIcon/UserIcon";

export const Header = () => {
    
    return(
        <StyledHeader>
            <div>
                <div>
                    <UserIcon/>
                    <h2>Nome do usuário</h2>
                </div>

                <button>...</button>
            </div>
        </StyledHeader>
    )
}
