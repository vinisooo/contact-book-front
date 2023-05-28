import { Outlet } from "react-router-dom";
import { ContextProvider } from "./context";
import { RequestStatus } from "./components/RequestStatus/RequestStatus";

export const App = () => {
    return(
        <ContextProvider>
            <div className="App">
                <Outlet/>
            </div>
            <RequestStatus/>
        </ContextProvider>
    )
}