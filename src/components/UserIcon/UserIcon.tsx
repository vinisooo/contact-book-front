import { StyledUserIcon } from "./styled";

interface iUserIconProps{
    initialLetter?: string;
}

export const UserIcon = ({initialLetter}: iUserIconProps) => {

    return(
        <StyledUserIcon>
            <span>{initialLetter?.toUpperCase() || "C"}</span>
        </StyledUserIcon>
    )
}
