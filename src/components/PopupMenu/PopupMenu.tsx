import { StyledPopupMenu } from "./styled"

interface iPopupMenuProps{
    children?: React.ReactNode
    display: boolean
}

export const PopupMenu = ({children, display}: iPopupMenuProps) => {
    if(!display){
        return <></>
    }
    return(
        <StyledPopupMenu>
            {children}            
        </StyledPopupMenu>
    )
}
