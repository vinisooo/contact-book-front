import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import { StyledRequestStatus } from "./styled";

export const RequestStatus = () => {
    const {isLoading, status, errorMessage} = useContext(UserContext);

    if(!isLoading && status === "none"){
        return(
            <></>
        )
    }
    return(
        <StyledRequestStatus loading={isLoading}>
            {
                isLoading &&
                <img src="https://www.freeiconspng.com/thumbs/load-icon-png/load-icon-png-27.png" alt="loading"/>
            }
            {
                status == "success" &&
                <img src="https://cdn-icons-png.flaticon.com/512/148/148767.png" alt="success" />
            }
            {
                status == "error" &&
                <>
                    <img src="https://www.freeiconspng.com/thumbs/error-icon/error-icon-4.png" alt="success" />
                    <p>{errorMessage}</p>
                </>
            }
        </StyledRequestStatus>
    )
}
