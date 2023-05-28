import { Header } from "./components/Header/Header";
import { StyledContainer } from "../../styles/Container";
import { AddContact } from "./components/AddContact/AddContact";

export const Contacts = () => {
    return(
        <>
            <Header/>
            <main>
                <StyledContainer>
                    <AddContact/>
                </StyledContainer>
            </main>
        </>
    )
}